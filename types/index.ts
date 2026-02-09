import React from 'react';

// Augment the React namespace directly for IntrinsicElements to ensure compatibility with recent React types
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        icon?: string;
        width?: string | number;
        height?: string | number;
        class?: string;
        'aria-label'?: string;
        'aria-hidden'?: boolean | 'true' | 'false';
      };
      'lottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        ref?: any;
        src?: string;
        background?: string;
        speed?: string | number;
        loop?: boolean;
        autoplay?: boolean;
        preserveAspectRatio?: string;
        'aria-label'?: string;
        class?: string;
      };
      'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        [key: string]: any;
      };
      'dotlottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        background?: string;
        speed?: string | number;
        style?: React.CSSProperties;
        loop?: boolean;
        autoplay?: boolean;
        mode?: string;
        [key: string]: any;
      };
    }
  }
}

// Augment global JSX namespace as a fallback
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        icon?: string;
        width?: string | number;
        height?: string | number;
        class?: string;
        'aria-label'?: string;
        'aria-hidden'?: boolean | 'true' | 'false';
      };
      'lottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        ref?: any;
        src?: string;
        background?: string;
        speed?: string | number;
        loop?: boolean;
        autoplay?: boolean;
        preserveAspectRatio?: string;
        'aria-label'?: string;
        class?: string;
      };
      'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        [key: string]: any;
      };
      'dotlottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        background?: string;
        speed?: string | number;
        style?: React.CSSProperties;
        loop?: boolean;
        autoplay?: boolean;
        mode?: string;
        [key: string]: any;
      };
    }
  }
}

// Page types
export type PageType = 'home' | 'performance' | 'hub' | 'cases';
export type CaseCategory = 'all' | 'agency' | 'ecom' | 'app';
export type Platform = 'meta' | 'tiktok' | 'snapchat';

// Common prop interfaces
export interface NavigationProps {
  onNavigate: (page: PageType) => void;
}

export interface DemoBookingProps {
  onBookDemo: () => void;
}

export interface BasePageProps extends DemoBookingProps {}

// Data interfaces
export interface CaseStudy {
  id: string;
  size: 'big' | 'small';
  category: CaseCategory;
  title: string;
  image: string;
  logo: string;
  platforms: Platform[];
  bgColor?: string;
  textColor?: string;
  logoInvert?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PartnerLogo {
  name: string;
  src: string;
}

export interface PerformanceSection {
  id: string;
  label: string;
}

export interface PricingTier {
  events: string;
  price: string;
  highlighted?: boolean;
}

export interface CompanyStat {
  value: string;
  label: string;
  color: 'yellow' | 'pink' | 'blue';
}

export interface CustomerLogo {
  name: string;
  src: string;
  alt: string;
}

export {};