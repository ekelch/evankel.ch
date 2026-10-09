<script module lang="ts">

    export type menuOptions = '' | 'about' | 'websites' | 'projects' | 'other'

	export type icon = {
        displayName: string;
        imgSrc: string;
        route: string;
        menu: menuOptions
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

    export type crosshair_values = {
        style: 'default' | 'classic' | 'dynamic';
        alpha: number;
        thickness: number;
        length: number;
        gap: number;
        outline: number;
        dot: boolean;
        color: number;
        r: number;
        g: number;
        b: number;
    }
</script>

;
