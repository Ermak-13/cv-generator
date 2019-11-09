<template>
  <label class="toggle">
    <span class="toggle__label">
      {{ label }}
    </span>

    <div class="toggle__control">
      <input
        type="checkbox"
        class="toggle__input"
        v-bind:checked="value"
        v-on:input="$emit('input', $event.target.checked)">
      <span class="toggle__slider round"></span>
    </div>
  </label>
</template>

<script>
export default {
  name: 'Checkbox',

  props: {
    label: String,
    value: Boolean
  }
}
</script>

<style>
.toggle {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.toggle:not(:last-child) {
  margin-bottom: 10px;
}

.toggle__control {
  position: relative;
  width: 45px;
  height: 26px;
}

.toggle__input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle__slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #CCCCCC;
  -webkit-transition: .4s;
  transition: .4s;
}

.toggle__slider::before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 2px;
  bottom: 3px;
  background-color: #FFFFFF;
  -webkit-transition: .4s;
  transition: .4s;
}

.toggle__input:checked + .toggle__slider {
  background-color: #4CAF50;
}

.toggle__input:focus + .toggle__slider {
  box-shadow: 0 0 1px #4CAF50;
}

.toggle__input:checked + .toggle__slider::before {
  transform: translateX(20px);
}

.toggle__slider.round {
  border-radius: 30px;
}

.toggle__slider.round::before {
  border-radius: 50%;
}
</style>
