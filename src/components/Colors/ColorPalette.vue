<template>
  <div class="palette-container">
    <div class="palette">
      <div class="palette-info">
        <p>{{ color.name }}</p>
      </div>
      <div class="palette-colors">
        <div :data-clipboard-text="color.primary" 
        :style="{ backgroundColor: color.primary }"
        class="color primary-color">
          <div class="color-msg">Copié !</div>
          <div class="color-hexa">{{ color.primary }}</div>
        </div>
        <div :data-clipboard-text="color.secondary" 
        :style="{ backgroundColor: color.secondary }"
        class="color secondary-color">
          <div class="color-msg">Copié !</div>
          <div class="color-hexa">{{ color.secondary }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClipboardJS from "clipboard";

export default {
  name: "ColorPalette",
    props: {
    color: Object,
  },
  created() {
    let clipboard = new ClipboardJS(".color");
    clipboard.on("success", function(e) {
      console.info("Action:", e.action);
      console.info("Text:", e.text);
      console.info("Trigger:", e.trigger);
      let msg = e.trigger.children[0];
      msg.style.opacity = 1;

      setTimeout(function() {
        msg.style.opacity = 0;
      }, 600);

      e.clearSelection();
    });
  },
};
</script>

<style scoped>
.palette {
margin: 20px;
background-color: white;
  overflow: hidden;
  height: 190px;
  width: 300px;
  border-radius: 0.5em;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
  transition: all 1s ease;
}

.palette:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}

.palette-info {
  font-weight: 600;
  padding: 0 20px;
  line-height: 0.6em;
}

.palette-colors {
  position: relative;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.6);
  display: flex;
  height: 100%;
  width: 100%;
}

.color {
  height: 100%;
  flex-grow: 1;
  transition: 0.25s ease;
  display: flex;
  justify-content: center;
}

.color:hover {
  flex-grow: 1.8;
}

.color:hover::after {
  opacity: 1;
}

.color .color-msg {
  color: rgb(170, 170, 170);
  mix-blend-mode: multiply;
  position: absolute;
  font-size: 0.9em;
  font-weight: 200;
  top: 30%;
  transition: 0.25s ease;
  opacity: 0;
}

.color .color-hexa {
  color: rgb(170, 170, 170);
  mix-blend-mode: multiply;
  position: absolute;
  bottom: 70px;
  opacity: 0;
  transition: 0.5s ease;
}

.color:hover .color-hexa {
  opacity: 1;
}

.primary-color {
  background-color: #ff9200;
  border-bottom-left-radius: 0.5em;
}

.secondary-color {
  background-color: #ffaf47;
  border-bottom-right-radius: 0.5em;
}

.secondary-color::after {
  color: beige;
  position: absolute;
  bottom: 70px;
  right: 20px;
  opacity: 0;
  transition: 0.5s ease;
}

</style>
