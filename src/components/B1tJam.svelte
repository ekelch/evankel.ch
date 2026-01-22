<script>
import ImagePlus from "./ImagePlus.svelte";
import jamCover from "$lib/assets/godotJam/godotJam.png"
import pickup from "$lib/assets/godotJam/pickup.gif"
import platform from "$lib/assets/godotJam/platform.gif"
import gameplay from "$lib/assets/godotJam/gameplay.gif"
</script>

<div class="b1t-main">
    <h2 class="b1t-header">B1T Game Jam - Godot</h2>
    <p>I spent a week learning the Godot game engine and then the following week creating this game during the b1t jam.</p>
    <p>Link to game on itch.io here: <a target="_blank" href="https://ekelch.itch.io/b1t2">https://ekelch.itch.io/b1t2</a></p>

    <p>The rules were to create a game using only two colors - in one week - no AI allowed.</p>
    <p>I created a 2D platformer game where you are a rabbit trying to get to the top of the platforms. I kept it simple partly because I was new to the game engine, but also because I wanted to create all of the other assets myself, such as:</p>
    <ul>
        <li>learned the basics of Aseprite and drew/animated the sprites for the player and the platforms</li>
        <li>improved and recorded a few short pieces on piano with Ableton</li>
        <li>learned simple use of vertex and fragment shaders to animate some sprites and change their colors based on player height</li>
    </ul>
    <ImagePlus src={jamCover} alt="bunny platformer game" description="The objective is simply climbing the platforms to the top. It is much more challenging than it looks and most of the feedback I received was that it was too hard so no one beat it." title="Godot 2D Platformer Game"/>

    <h2>The Finished Game</h2>
    <p>I'm really happy with how the game turned out. While the gameplay is fairly shallow and uninnovative, I'm really happy with the movement and ambience. I spent a long time tweaking the movement script to get the momentum and gravity feeling just right. A couple things I tweaked were:</p>
    <ul>
        <li>adding momentum to player movement so you have a bit of weight and don't turn instantly</li>
        <li>inversely scaling gravity with displacement from the ground so you snap to the ground when close to it (feels much more grounded - was trying to fixing 'floaty' feeling of pure physics based system)</li>
        <li>coyote time - ability to still jump for a small amount of time after walking off of a platform</li>
    </ul>

    <h2>Shaders</h2>
    <p>I used both vertex and fragment shaders in this game. Vertex shaders allowed me to animating the floating flower pickups (hovering up and down) as well as the swaying flowers side to side. I also used a global fragment shader to draw the 2 changing colors of the game over time based on player height</p>
    <div class="side-by-side">
        <ImagePlus title="Flower Pickup" description="Vertex shader moving every vertex a uniform amount on the y-axis as a function of sin(time)" src={pickup} alt="" minY={120}/>
        <ImagePlus title="Platform" description="Vertex shader used to alter x displacement as function of y displacement and sin(time)" src={platform} alt="" minY={150}/>
    </div>

    <br/>
    <br/>
    <ImagePlus title="Gameplay GIF" description="You can see a bit more of the movement, animations, and how the colors morph from brown->green (using HSV, altering hues and a bit of saturation wtih y-displacement from the floor to your objective higher up)." src={gameplay} alt="" />

    <p>Github for this project: <a target="_blank" href="https://github.com/ekelch/b1t2game/tree/main">b1t github</a></p>
</div>

<style>
    .b1t-main {
        padding: 4px;
    }

    .b1t-header {
        margin: 0;
    }

    .side-by-side {
        display: flex;
        height: 240px;
    }
</style>