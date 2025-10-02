export type Theme = 'light' | 'dark';

export const useTheme = () => {
  // Initialize theme state with dark as default
  const theme = ref<Theme>('dark');

  // Check if we're in browser environment
  const isClient = import.meta.client;

  // Initialize theme from localStorage or system preference
  const initializeTheme = () => {
    if (!isClient) return;

    // Check what theme is already applied to avoid flashing
    const root = document.documentElement;
    const currentClass = root.classList.contains('light-theme')
      ? 'light'
      : root.classList.contains('dark-theme')
      ? 'dark'
      : null;

    // Check localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const targetTheme =
      savedTheme && ['light', 'dark'].includes(savedTheme)
        ? savedTheme
        : 'dark';

    // Update our reactive state
    theme.value = targetTheme;

    // Only apply theme if it's different from what's already applied
    if (currentClass !== targetTheme) {
      applyTheme(targetTheme);
    }
  };

  // Apply theme to document root
  const applyTheme = (newTheme: Theme) => {
    if (!isClient) return;

    const root = document.documentElement;
    const otherTheme = newTheme === 'dark' ? 'light' : 'dark';

    // Only update if theme is actually changing
    if (!root.classList.contains(`${newTheme}-theme`)) {
      // Remove other theme class
      root.classList.remove(`${otherTheme}-theme`);

      // Add new theme class
      root.classList.add(`${newTheme}-theme`);

      // Update CSS custom property for theme detection
      root.style.setProperty('--current-theme', newTheme);
    }
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

  // Initialize immediately if we're on the client
  if (isClient) {
    initializeTheme();
  }

  return {
    theme: readonly(theme),
    isDark,
    isLight,
    toggleTheme,
    setTheme,
    initializeTheme,
  };
};
