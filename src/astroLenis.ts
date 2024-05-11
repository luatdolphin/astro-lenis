import { z } from "astro/zod";
import { defineIntegration } from "astro-integration-kit";
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const absoluteStylesPath = resolve(dirname(fileURLToPath(import.meta.url)), 'lenis-styles.css')

export const astroLenis = defineIntegration({
	name: "astro-lenis",
  optionsSchema: z.object({
    duration: z.number().optional(),
    syncTouch: z.boolean().default(false),
  }),
	setup({ options }) {
		return {
			hooks: {
        "astro:config:setup": ({ injectScript }) => {
          injectScript('page', `
            import Lenis from 'lenis';
            const lenis = new Lenis(${JSON.stringify(options)});

            function raf(time: number) {
              lenis.raf(time);
              requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);
          `)
          injectScript('page-ssr', absoluteStylesPath)
        },
      },
		};
	},
});
