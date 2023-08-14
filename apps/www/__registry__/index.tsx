// @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.
import * as React from "react"

export const Index: Record<string, any> = {
  default: {
    accordion: {
      name: "accordion",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/accordion")),
      files: ["registry/default/ui/accordion.tsx"],
    },

    "alert-dialog": {
      name: "alert-dialog",
      type: "components:ui",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/default/ui/alert-dialog")),
      files: ["registry/default/ui/alert-dialog.tsx"],
    },

    "black-hole": {
      name: "black-hole",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/black-hole")),
      files: ["registry/default/ui/black-hole.tsx"],
    },
    button: {
      name: "button",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/button")),
      files: ["registry/default/ui/button.tsx"],
    },
    "stars-moving": {
      name: "stars-moving",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/stars-moving/stars-moving")),
      files: ["registry/default/ui/stars-moving/stars-moving.tsx"],
    },
    toast: {
      name: "toast",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/toast")),
      files: [
        "registry/default/ui/toast.tsx",
        "registry/default/ui/use-toast.ts",
        "registry/default/ui/toaster.tsx",
      ],
    },

    "accordion-demo": {
      name: "accordion-demo",
      type: "components:example",
      registryDependencies: ["accordion"],
      component: React.lazy(
        () => import("@/registry/default/example/accordion-demo")
      ),
      files: ["registry/default/example/accordion-demo.tsx"],
    },

    "alert-dialog-demo": {
      name: "alert-dialog-demo",
      type: "components:example",
      registryDependencies: ["alert-dialog", "button"],
      component: React.lazy(
        () => import("@/registry/default/example/alert-dialog-demo")
      ),
      files: ["registry/default/example/alert-dialog-demo.tsx"],
    },

    "black-hole-demo": {
      name: "black-hole-demo",
      type: "components:example",
      registryDependencies: ["black-hole"],
      component: React.lazy(
        () => import("@/registry/default/example/black-hole-demo")
      ),
      files: ["registry/default/example/black-hole-demo.tsx"],
    },
    "button-demo": {
      name: "button-demo",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(
        () => import("@/registry/default/example/button-demo")
      ),
      files: ["registry/default/example/button-demo.tsx"],
    },
    "button-secondary": {
      name: "button-secondary",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(
        () => import("@/registry/default/example/button-secondary")
      ),
      files: ["registry/default/example/button-secondary.tsx"],
    },
    "button-destructive": {
      name: "button-destructive",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(
        () => import("@/registry/default/example/button-destructive")
      ),
      files: ["registry/default/example/button-destructive.tsx"],
    },
    "button-outline": {
      name: "button-outline",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(
        () => import("@/registry/default/example/button-outline")
      ),
      files: ["registry/default/example/button-outline.tsx"],
    },
    "button-ghost": {
      name: "button-ghost",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(
        () => import("@/registry/default/example/button-ghost")
      ),
      files: ["registry/default/example/button-ghost.tsx"],
    },
    "button-link": {
      name: "button-link",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(
        () => import("@/registry/default/example/button-link")
      ),
      files: ["registry/default/example/button-link.tsx"],
    },
    "button-with-icon": {
      name: "button-with-icon",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(
        () => import("@/registry/default/example/button-with-icon")
      ),
      files: ["registry/default/example/button-with-icon.tsx"],
    },
    "button-loading": {
      name: "button-loading",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(
        () => import("@/registry/default/example/button-loading")
      ),
      files: ["registry/default/example/button-loading.tsx"],
    },
    "button-icon": {
      name: "button-icon",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(
        () => import("@/registry/default/example/button-icon")
      ),
      files: ["registry/default/example/button-icon.tsx"],
    },
    "button-as-child": {
      name: "button-as-child",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(
        () => import("@/registry/default/example/button-as-child")
      ),
      files: ["registry/default/example/button-as-child.tsx"],
    },
    "stars-moving-demo": {
      name: "stars-moving-demo",
      type: "components:example",
      registryDependencies: ["stars-moving"],
      component: React.lazy(
        () => import("@/registry/default/example/stars-moving-demo")
      ),
      files: ["registry/default/example/stars-moving-demo.tsx"],
    },
    "toast-demo": {
      name: "toast-demo",
      type: "components:example",
      registryDependencies: ["toast"],
      component: React.lazy(
        () => import("@/registry/default/example/toast-demo")
      ),
      files: ["registry/default/example/toast-demo.tsx"],
    },
    "toast-destructive": {
      name: "toast-destructive",
      type: "components:example",
      registryDependencies: ["toast"],
      component: React.lazy(
        () => import("@/registry/default/example/toast-destructive")
      ),
      files: ["registry/default/example/toast-destructive.tsx"],
    },
    "toast-simple": {
      name: "toast-simple",
      type: "components:example",
      registryDependencies: ["toast"],
      component: React.lazy(
        () => import("@/registry/default/example/toast-simple")
      ),
      files: ["registry/default/example/toast-simple.tsx"],
    },
    "toast-with-action": {
      name: "toast-with-action",
      type: "components:example",
      registryDependencies: ["toast"],
      component: React.lazy(
        () => import("@/registry/default/example/toast-with-action")
      ),
      files: ["registry/default/example/toast-with-action.tsx"],
    },
    "toast-with-title": {
      name: "toast-with-title",
      type: "components:example",
      registryDependencies: ["toast"],
      component: React.lazy(
        () => import("@/registry/default/example/toast-with-title")
      ),
      files: ["registry/default/example/toast-with-title.tsx"],
    },
  },
  "new-york": {
    accordion: {
      name: "accordion",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/new-york/ui/accordion")),
      files: ["registry/new-york/ui/accordion.tsx"],
    },

    "alert-dialog": {
      name: "alert-dialog",
      type: "components:ui",
      registryDependencies: ["button"],
      component: React.lazy(
        () => import("@/registry/new-york/ui/alert-dialog")
      ),
      files: ["registry/new-york/ui/alert-dialog.tsx"],
    },

    "black-hole": {
      name: "black-hole",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/new-york/ui/black-hole")),
      files: ["registry/new-york/ui/black-hole.tsx"],
    },
    button: {
      name: "button",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/new-york/ui/button")),
      files: ["registry/new-york/ui/button.tsx"],
    },

    toast: {
      name: "toast",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/new-york/ui/toast")),
      files: [
        "registry/new-york/ui/toast.tsx",
        "registry/new-york/ui/use-toast.ts",
        "registry/new-york/ui/toaster.tsx",
      ],
    },

    "accordion-demo": {
      name: "accordion-demo",
      type: "components:example",
      registryDependencies: ["accordion"],
      component: React.lazy(
        () => import("@/registry/new-york/example/accordion-demo")
      ),
      files: ["registry/new-york/example/accordion-demo.tsx"],
    },
    "alert-dialog-demo": {
      name: "alert-dialog-demo",
      type: "components:example",
      registryDependencies: ["alert-dialog", "button"],
      component: React.lazy(
        () => import("@/registry/new-york/example/alert-dialog-demo")
      ),
      files: ["registry/new-york/example/alert-dialog-demo.tsx"],
    },

    "black-hole-demo": {
      name: "black-hole-demo",
      type: "components:example",
      registryDependencies: ["black-hole"],
      component: React.lazy(
        () => import("@/registry/new-york/example/black-hole-demo")
      ),
      files: ["registry/new-york/example/black-hole-demo.tsx"],
    },
    "button-demo": {
      name: "button-demo",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(
        () => import("@/registry/new-york/example/button-demo")
      ),
      files: ["registry/new-york/example/button-demo.tsx"],
    },
    "button-secondary": {
      name: "button-secondary",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(
        () => import("@/registry/new-york/example/button-secondary")
      ),
      files: ["registry/new-york/example/button-secondary.tsx"],
    },
    "button-destructive": {
      name: "button-destructive",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(
        () => import("@/registry/new-york/example/button-destructive")
      ),
      files: ["registry/new-york/example/button-destructive.tsx"],
    },
    "button-outline": {
      name: "button-outline",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(
        () => import("@/registry/new-york/example/button-outline")
      ),
      files: ["registry/new-york/example/button-outline.tsx"],
    },
    "button-ghost": {
      name: "button-ghost",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(
        () => import("@/registry/new-york/example/button-ghost")
      ),
      files: ["registry/new-york/example/button-ghost.tsx"],
    },
    "button-link": {
      name: "button-link",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(
        () => import("@/registry/new-york/example/button-link")
      ),
      files: ["registry/new-york/example/button-link.tsx"],
    },
    "button-with-icon": {
      name: "button-with-icon",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(
        () => import("@/registry/new-york/example/button-with-icon")
      ),
      files: ["registry/new-york/example/button-with-icon.tsx"],
    },
    "button-loading": {
      name: "button-loading",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(
        () => import("@/registry/new-york/example/button-loading")
      ),
      files: ["registry/new-york/example/button-loading.tsx"],
    },
    "button-icon": {
      name: "button-icon",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(
        () => import("@/registry/new-york/example/button-icon")
      ),
      files: ["registry/new-york/example/button-icon.tsx"],
    },
    "button-as-child": {
      name: "button-as-child",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(
        () => import("@/registry/new-york/example/button-as-child")
      ),
      files: ["registry/new-york/example/button-as-child.tsx"],
    },

    "toast-demo": {
      name: "toast-demo",
      type: "components:example",
      registryDependencies: ["toast"],
      component: React.lazy(
        () => import("@/registry/new-york/example/toast-demo")
      ),
      files: ["registry/new-york/example/toast-demo.tsx"],
    },
    "toast-destructive": {
      name: "toast-destructive",
      type: "components:example",
      registryDependencies: ["toast"],
      component: React.lazy(
        () => import("@/registry/new-york/example/toast-destructive")
      ),
      files: ["registry/new-york/example/toast-destructive.tsx"],
    },
    "toast-simple": {
      name: "toast-simple",
      type: "components:example",
      registryDependencies: ["toast"],
      component: React.lazy(
        () => import("@/registry/new-york/example/toast-simple")
      ),
      files: ["registry/new-york/example/toast-simple.tsx"],
    },
    "toast-with-action": {
      name: "toast-with-action",
      type: "components:example",
      registryDependencies: ["toast"],
      component: React.lazy(
        () => import("@/registry/new-york/example/toast-with-action")
      ),
      files: ["registry/new-york/example/toast-with-action.tsx"],
    },
    "toast-with-title": {
      name: "toast-with-title",
      type: "components:example",
      registryDependencies: ["toast"],
      component: React.lazy(
        () => import("@/registry/new-york/example/toast-with-title")
      ),
      files: ["registry/new-york/example/toast-with-title.tsx"],
    },
  },
}
