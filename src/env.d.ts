/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare interface ImportMetaEnv {
  readonly PUBLIC_WEB3FORMS_ACCESS_KEY?: string;
  readonly PUBLIC_FORMSPREE_ENDPOINT?: string;
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}
