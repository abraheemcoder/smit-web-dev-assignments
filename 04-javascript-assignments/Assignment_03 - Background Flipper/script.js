const colors = [
    {name:"Crimson", hex:"#dc143c"},
    {name:"Cyan", hex:"#00ffff"},
    {name:"Magenta", hex:"#ff00ff"},
    {name:"Lime", hex:"#00ff00"},
    {name:"Indigo", hex:"#4b0082"},
    {name:"Violet", hex:"#ee82ee"},
    {name:"Gold", hex:"#ffd700"},
    {name:"Silver", hex:"#c0c0c0"},
    {name:"Beige", hex:"#f5f5dc"},
    {name:"Brown", hex:"#a52a2a"},
    {name:"Chocolate", hex:"#d2691e"},
    {name:"Tomato", hex:"#ff6347"},
    {name:"Salmon", hex:"#fa8072"},
    {name:"Red", hex:"#ff0000"},
    {name:"Green", hex:"#008000"},
    {name:"Blue", hex:"#0000ff"},
    {name:"Yellow", hex:"#ffff00"},
    {name:"Orange", hex:"#ffa500"},
    {name:"Purple", hex:"#800080"},
    {name:"Pink", hex:"#ffc0cb"},
    {name:"Teal", hex:"#008080"},
    {name:"Black", hex:"#000000"},
    {name:"Gray", hex:"#808080"},
    {name:"Khaki", hex:"#f0e68c"},
    {name:"Lavender", hex:"#e6e6fa"},
    {name:"Coral", hex:"#ff7f50"},
    {name:"Plum", hex:"#dda0dd"},
    {name:"Turquoise", hex:"#40e0d0"},
    {name:"Aqua", hex:"#00ffff"},
    {name:"Olive", hex:"#808000"},
    {name:"Navy", hex:"#000080"},
    {name:"Maroon", hex:"#800000"},
    {name:"MintCream", hex:"#f5fffa"},
    {name:"SlateBlue", hex:"#6a5acd"},
    {name:"DarkGreen", hex:"#006400"},
    {name:"LightBlue", hex:"#add8e6"},
    {name:"SkyBlue", hex:"#87ceeb"},
    {name:"DeepPink", hex:"#ff1493"},
    {name:"FireBrick", hex:"#b22222"},
    {name:"SeaGreen", hex:"#2e8b57"}
];

const colorNameElement = document.getElementById("color-name");

function bgColorFlipper() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const selectedColor = colors[randomIndex];

    document.body.style.backgroundColor = selectedColor.hex;
    colorNameElement.innerText = `Color: ${selectedColor.name}`;

    console.log(`Background color changed to: ${selectedColor.name} (${selectedColor.hex})`);
}