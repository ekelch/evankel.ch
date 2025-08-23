<script context="module" lang="ts">
    import {type ComponentType } from "svelte";
    import About from "../routes/about/about.svelte";

    export enum AppOptionsEnum {
        'about',
        'cross',
        'resume',
        'carplay',
        'svelte',
        'b1tJam'
    }

	export type gridlayout = {
        displayName: string;
		modCode: AppOptionsEnum;
        content: ComponentType;
		x: number;
		y: number;
		w: number;
		h: number;
		z: number;
		show?: boolean;
        imgSrc: string;
        iconX: number;
        iconY: number;
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

    export const stubApp: gridlayout = {
        modCode: AppOptionsEnum.about,
        displayName: "displayName",
        imgSrc: "desktopIconImg",
        iconX: 0,
        iconY: 0,
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        z: 0,
        show: false,
        content: About
    }
</script>

;
