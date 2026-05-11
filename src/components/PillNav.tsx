import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

export type PillNavItem = {
    label: string;
    href: string;
    ariaLabel?: string;
};

export interface PillNavProps {
    logo?: string;
    logoAlt?: string;
    items: PillNavItem[];
    activeHref?: string;
    className?: string;
    ease?: string;
    baseColor?: string;
    pillColor?: string;
    hoveredPillTextColor?: string;
    pillTextColor?: string;
    onMobileMenuClick?: () => void;
    initialLoadAnimation?: boolean;
}

const PillNav: React.FC<PillNavProps> = ({
    items,
    activeHref,
    className = '',
    ease = 'power3.out',
    baseColor = '#fff',
    pillColor = '#120F17',
    hoveredPillTextColor = '#120F17',
    pillTextColor,
    onMobileMenuClick,
    initialLoadAnimation = true
}) => {
    const resolvedPillTextColor = pillTextColor ?? baseColor;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const navItemsRef = useRef<HTMLDivElement>(null);
    const hamburgerRef = useRef<HTMLButtonElement>(null);
    const circleRefs = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        if (initialLoadAnimation && navItemsRef.current) {
            gsap.from(navItemsRef.current, {
                y: -20,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            });
        }
    }, [initialLoadAnimation]);

    const handleEnter = (index: number) => {
        const circle = circleRefs.current[index];
        if (circle) {
            gsap.to(circle, {
                scale: 1.5,
                opacity: 1,
                duration: 0.4,
                ease: ease
            });
        }
    };

    const handleLeave = (index: number) => {
        const circle = circleRefs.current[index];
        if (circle) {
            gsap.to(circle, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                ease: ease
            });
        }
    };

    const toggleMobileMenu = () => {
        const newState = !isMobileMenuOpen;
        setIsMobileMenuOpen(newState);

        const menu = mobileMenuRef.current;
        if (menu) {
            if (newState) {
                gsap.set(menu, { visibility: 'visible', pointerEvents: 'auto' });
                gsap.fromTo(menu, 
                    { opacity: 0, y: -15, scale: 0.92 },
                    { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.2)' }
                );
            } else {
                gsap.to(menu, {
                    opacity: 0, y: -10, scale: 0.95, duration: 0.3, ease: 'power2.in',
                    onComplete: () => gsap.set(menu, { visibility: 'hidden', pointerEvents: 'none' })
                });
            }
        }
        onMobileMenuClick?.();
    };

    const isExternalLink = (href: string) =>
        href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#');

    const isRouterLink = (href?: string) => href && !isExternalLink(href);

    const cssVars = {
        '--base': baseColor,
        '--pill-bg': pillColor,
        '--hover-text': hoveredPillTextColor,
        '--pill-text': resolvedPillTextColor,
        '--nav-h': '42px',
        '--pill-pad-x': '18px',
        '--pill-gap': '3px'
    } as React.CSSProperties;

    return (
        <div className="absolute top-[1em] z-[1000] w-full left-0 md:w-auto md:left-auto flex justify-center md:block">
            <nav
                className={`w-full md:w-max flex items-center justify-between md:justify-start box-border px-4 md:px-0 ${className}`}
                aria-label="Primary"
                style={cssVars}
            >
                <div
                    ref={navItemsRef}
                    className="relative items-center rounded-full hidden md:flex ml-2"
                    style={{ height: 'var(--nav-h)', background: 'var(--base, #000)' }}
                >
                    <ul role="menubar" className="list-none flex items-stretch m-0 p-[3px] h-full" style={{ gap: 'var(--pill-gap)' }}>
                        {items.map((item, i) => {
                            const isActive = activeHref === item.href;
                            const basePillClasses = 'relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-[14px] uppercase tracking-wider cursor-pointer transition-colors';
                            
                            const PillContent = (
                                <>
                                    <span
                                        ref={el => { circleRefs.current[i] = el; }}
                                        className="absolute inset-0 bg-purple-500/20 opacity-0 scale-0 rounded-full"
                                        aria-hidden="true"
                                    />
                                    <span className="relative z-10">{item.label}</span>
                                    {isActive && (
                                        <span className="absolute left-1/2 -bottom-[4px] -translate-x-1/2 w-1 h-1 rounded-full bg-purple-500" />
                                    )}
                                </>
                            );

                            return (
                                <li key={item.href} role="none" className="flex h-full">
                                    {isRouterLink(item.href) ? (
                                        <Link
                                            to={item.href}
                                            className={basePillClasses}
                                            style={{ background: 'var(--pill-bg)', color: 'var(--pill-text)', padding: '0 var(--pill-pad-x)' }}
                                            onMouseEnter={() => handleEnter(i)}
                                            onMouseLeave={() => handleLeave(i)}
                                        >
                                            {PillContent}
                                        </Link>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className={basePillClasses}
                                            style={{ background: 'var(--pill-bg)', color: 'var(--pill-text)', padding: '0 var(--pill-pad-x)' }}
                                            onMouseEnter={() => handleEnter(i)}
                                            onMouseLeave={() => handleLeave(i)}
                                        >
                                            {PillContent}
                                        </a>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <button
                    ref={hamburgerRef}
                    onClick={toggleMobileMenu}
                    className="md:hidden p-2 text-white glass rounded-full"
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                        <span className={`h-0.5 w-6 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`h-0.5 w-6 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`h-0.5 w-6 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </button>
            </nav>

            <div
                ref={mobileMenuRef}
                className="md:hidden fixed top-20 right-5 z-[1099] invisible opacity-0 w-64 glass rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
                <ul className="flex flex-col p-4 gap-2">
                    {items.map((item) => (
                        <li key={item.href}>
                            {isRouterLink(item.href) ? (
                                <Link
                                    to={item.href}
                                    className="flex items-center p-3 rounded-2xl hover:bg-white/5 transition-colors font-medium text-white"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <a
                                    href={item.href}
                                    className="flex items-center p-3 rounded-2xl hover:bg-white/5 transition-colors font-medium text-white"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PillNav;
