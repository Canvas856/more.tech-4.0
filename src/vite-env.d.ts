/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VTB_API_BASE_URL: string;
  readonly VITE_WALLET_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
