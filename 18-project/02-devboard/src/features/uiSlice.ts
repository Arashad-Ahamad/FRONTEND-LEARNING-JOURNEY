import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  sidebarOpen: boolean;
  theme: "light" | "dark";
}

const getInitialTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light";
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const getInitialSidebar = (): boolean => {
  if (typeof window === "undefined") return false;
  const saved = localStorage.getItem("sidebarOpen");
  if (saved === "true") return true;
  if (saved === "false") return false;
  return window.innerWidth >= 768;
};

const initialState: UIState = {
  sidebarOpen: getInitialSidebar(),
  theme: getInitialTheme(),
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
      if (typeof window !== "undefined") {
        localStorage.setItem("sidebarOpen", String(state.sidebarOpen));
      }
    },
    closeSidebar: (state) => {
      state.sidebarOpen = false;
      if (typeof window !== "undefined") {
        localStorage.setItem("sidebarOpen", "false");
      }
    },
    
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("sidebarOpen", String(action.payload));
      }
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", state.theme);
        document.documentElement.classList.toggle("dark", state.theme === "dark");
      }
    },
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
      if (typeof window !== "undefined") {
        document.documentElement.classList.toggle("dark", action.payload === "dark");
      }
    },
  },
});


export const {
  toggleSidebar,
  closeSidebar,
  setSidebarOpen,
  toggleTheme,
  setTheme,
} = uiSlice.actions;

export default uiSlice.reducer;