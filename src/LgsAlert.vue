<template>
  <div class="lgs-alert" :class="{flyin: flyin}" v-if="active" role="alert">
    <slot name="body">
      <h3 v-if="message.title">{{ message.title }}</h3>
      <p>{{ message.body }}</p>
    </slot>
    <slot name="dismiss">
      <a class="close" href="javascript:;" v-on:click="onClick()">
        <svg class="btn-close" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
      </a>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'LgsAlert',
    props: {
      'active': {
        default: false,
        type: Boolean
      },
      'flyin': {
        default: false,
        type: Boolean
      },
      'message': {
        default: {
          title: '',
          body: ''
        },
        type: Object
      }
    },
    methods: {
      onClick: function () {
        this.active = false
      }
    }
  }
</script>

<style lang="scss">

  .lgs-alert {
    position: relative;

    .close {
      position: absolute;
      top: 0px;
      right: 0px;
      margin-right: 1em;
      margin-top: 2em;

      .btn-close {
        color: #000000;
        height: 20px;
        width: 20px;
      }
    }
    
    &.flyin {
      position: fixed;
      z-index: 1000;
      top: 50px;
      right: -10000px;
      width: 400px;
      animation: slide 0.5s forwards;
      -webkit-animation: slide 0.5s forwards;
      animation-delay: 0.25s;
      -webkit-animation-delay: 0.25s;
      box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    }
  }

  @keyframes slide {
    100% { right: 10px; }
  }

  @-webkit-keyframes slide {
    100% { right: 10px; }
  }

</style>
