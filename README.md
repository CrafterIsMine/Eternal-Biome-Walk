# Eternal Biome Walk<br>
Eternal Biome Walk is a meditative, endless procedural exploration experience built from scratch using HTML Canvas and Vanilla JavaScript. You traverse an infinitely generating landscape, witnessing the seamless transition between distinct ecological zones. The core of the experience is its dynamic environmental system: as you travel, the sky, terrain, flora, and weather particles smoothly interpolate between Tundra, Forest, Desert, and Fungal biomes, creating a unique, never-repeating visual journey.<br>
Controls:<br>

Left Click / Touch (Hold): Sprint. Increases your traversal speed significantly, altering the flow of the environment and weather particles. Release to return to a calm walking pace.

**Travel as far as possible. There is no fail state; the goal is to witness the infinite procedural generation and the seamless, mathematically smooth transitions between the different biomes.**<br>
**Inspiration:** I wanted to build a relaxing, infinite experience that contrasted with the high-stress nature of typical endless runners. The idea of using smooth color interpolation and procedural generation to create a living, breathing world that never ends at all! This project is inspired by ambient exploration games like Proteus and Journey, as well as the biome generation in Minecraft.<br>
**Theme:** Endless
This project fits the theme directly because the core experience revolves around traversing infinite distance through a procedurally generated world. The terrain, tree placement, and weather particles are generated on the fly and recycled via an object-pooling system, ensuring the experience can continue indefinitely without ever reaching a boundary, running out of memory, or repeating the exact same sequence of events. I have also optimized it so that the person playing this does not receive any lag on their browser.
