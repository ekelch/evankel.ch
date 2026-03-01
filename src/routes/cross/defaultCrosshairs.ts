import type { crosshair, crosshair_values } from '../../types.ts/layouts.svelte';
export const crosshair_default: crosshair = {
	style: 'default',
	length: { min: 0, max: 10, step: 0.1, value: 5 },
	thickness: { min: 0.1, max: 6, step: 0.1, value: 1.5 },
	gap: { min: -25, max: 25, step: 1, value: -2 },
	outline: { min: 0, max: 3, step: 0.1, value: 0 },
	dot: false,
	color: 1,
	r: { min: 0, max: 255, step: 1, value: 100 },
	g: { min: 0, max: 255, step: 1, value: 230 },
	b: { min: 0, max: 255, step: 1, value: 230 },
	alpha: { min: 0, max: 250, step: 1, value: 250 }
};

export const crosshair_preset_1: crosshair_values = {
	style: 'default',
	length: 5,
	thickness: 1.5,
	gap: -2,
	outline: 1,
	dot: false,
	color: 1,
	r: 100,
	g: 230,
	b: 230,
	alpha: 250
};

export const crosshair_preset_2: crosshair_values = {
	style: 'default',
	length: 1.3,
	thickness: 0.5,
	gap: -6,
	outline: 1,
	dot: false,
	color: 1,
	r: 100,
	g: 230,
	b: 230,
	alpha: 250
};

export const crosshair_preset_3: crosshair_values = {
	style: 'default',
	length: 0.5,
	thickness: 0.5,
	gap: -6,
	outline: 1,
	dot: false,
	color: 1,
	r: 0,
	g: 255,
	b: 255,
	alpha: 250
};