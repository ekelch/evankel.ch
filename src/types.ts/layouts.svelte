<script context="module" lang="ts">
	export type appOptions = 'about' | 'cross';

	export type gridlayout = {
		c: appOptions;
		x: number;
		y: number;
		w: number;
		h: number;
		z: number;
		show?: boolean;
	};

	export type DesktopIconType = {
		imgSrc: string;
		appName: string;
		x: number;
		y: number;
		openApp: () => void;
	};

	export type SliderRange = {
		value: number;
		min: number;
		max: number;
		step: number;
		minExp?: number;
		maxExp?: number;
	};

	export type crosshair = {
		style: 'default' | 'classic' | 'dynamic';
		alpha: SliderRange;
		thickness: SliderRange;
		length: SliderRange;
		gap: SliderRange;
		outline: SliderRange;
		dot: boolean;
		color: number;
		r: SliderRange;
		g: SliderRange;
		b: SliderRange;
	};
</script>

;
