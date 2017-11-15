<template>
  <div class="lgs-spinner" v-if="active" :style="{ height:size + 'px', width:size + 'px'}">
    <svg>
      <circle :cx="(size / 2) + stroke" :cy="(size / 2) + stroke" :r="size/2" :style="{ stroke: strokeColor }"></circle>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'LgsSpinner',
    data: () => {
      return {
        size: 100,
        stroke: 4
      }
    },
    props: {
      'active': {
        default: true,
        type: Boolean
      },
      'strokeColor': {
        default: '#111111',
        type: String
      }
    }
  }
</script>

<style>
  .lgs-spinner {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    text-indent: -9999em;
  }

  .lgs-spinner svg {
    display: block;
    width: 108px;
    height: 108px;
    x: 0px;
    y: 0px;
  }

  .lgs-spinner svg circle {
    fill: transparent;
    stroke: #212121;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-dasharray: calc(3.14 * 100);
    -webkit-transform-origin: center;
    -moz-transform-origin: center;
    -ms-transform-origin: center;
    -o-transform-origin: center;
    transform-origin: center;
    -webkit-animation: spinner 2s linear infinite;
    -moz-animation: spinner 2s linear infinite;
    -ms-animation: spinner 2s linear infinite;
    -o-animation: spinner 2s linear infinite;
    animation: spinner 2s linear infinite;
  }

  @-webkit-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
      stroke-dashoffset: calc(0.66 * 100);
    } 50% {
      -webkit-transform: rotate(720deg);
      stroke-dashoffset: calc(3.14 * 100);
    } 100% {
      -webkit-transform: rotate(1080deg);
      stroke-dashoffset: calc(0.66 * 100);
    }
  }

  @-moz-keyframes spinner {
    0% {
      -moz-transform: rotate(0deg);
      stroke-dashoffset: calc(0.66 * 100);
    } 50% {
      -moz-transform: rotate(720deg);
      stroke-dashoffset: calc(3.14 * 100);
    } 100% {
      -moz-transform: rotate(1080deg);
      stroke-dashoffset: calc(0.66 * 100);
    }
  }

  @-ms-keyframes spinner {
    0% {
      -ms-transform: rotate(0deg);
      stroke-dashoffset: calc(0.66 * 100);
    } 50% {
      -ms-transform: rotate(720deg);
      stroke-dashoffset: calc(3.14 * 100);
    } 100% {
      -ms-transform: rotate(1080deg);
      stroke-dashoffset: calc(0.66 * 100);
    }
  }

  @-o-keyframes spinner {
    0% {
      -o-transform: rotate(0deg);
      stroke-dashoffset: calc(0.66 * 100);
    } 50% {
      -o-transform: rotate(720deg);
      stroke-dashoffset: calc(3.14 * 100);
    } 100% {
      -o-transform: rotate(1080deg);
      stroke-dashoffset: calc(0.66 * 100);
    }
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
      stroke-dashoffset: calc(0.66 * 100);
    } 50% {
      transform: rotate(720deg);
      stroke-dashoffset: calc(3.14 * 100);
    } 100% {
      transform: rotate(1080deg);
      stroke-dashoffset: calc(0.66 * 100);
    }
  }
</style>
