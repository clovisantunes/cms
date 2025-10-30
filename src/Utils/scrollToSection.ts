interface ScrollToSectionOptions {
    behavior?: ScrollBehavior;
    block?: ScrollLogicalPosition;
}

export const scrollToSection = (sectionId: string): void => {
    const section: HTMLElement | null = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        } as ScrollToSectionOptions);
    }
};