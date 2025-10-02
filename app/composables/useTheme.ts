export type Theme = 'light' | 'dark';

export const useTheme = () => {
  // Initialize theme state with dark as default
  const theme = ref<Theme>('dark');

  // Check if we're in browser environment
  const isClient = process.client;

  // Initialize theme from localStorage or system preference
  const initializeTheme = () => {
    if (!isClient) return;

    // Check localStorage first
    const savedTheme = localStorage.getItem('theme') as Theme | null;

    if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
      theme.value = savedTheme;
    } else {
      // Default to dark mode since the app currently only has dark styling
      theme.value = 'dark';
    }

    // Apply theme to document
    applyTheme(theme.value);
  };

  // Apply theme to document root
  const applyTheme = (newTheme: Theme) => {
    if (!isClient) return;

    const root = document.documentElement;

    // Remove existing theme classes
    root.classList.remove('light-theme', 'dark-theme');

    // Add new theme class
    root.classList.add(`${newTheme}-theme`);

    // Update CSS custom property for theme detection
    root.style.setProperty('--current-theme', newTheme);
  };

  // Toggle between themes
  const toggleTheme = () => {
    const newTheme: Theme = theme.value === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  // Set specific theme
  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme;

    if (isClient) {
      localStorage.setItem('theme', newTheme);
      applyTheme(newTheme);
    }
  };

  // Computed properties for convenience
  const isDark = computed(() => theme.value === 'dark');
  const isLight = computed(() => theme.value === 'light');

  // Initialize on mount
  onMounted(() => {
    initializeTheme();
  });

  return {
    theme: readonly(theme),
    isDark,
    isLight,
    toggleTheme,
    setTheme,
    initializeTheme,
  };
};
