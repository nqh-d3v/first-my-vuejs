          <!--  -->
<template>
  <div class="column is-1" style="width: calc(100% / 8) !important">
    <div class="card is-shadowless">
      <div class="card-image pt-3">
        <figure class="image is-64x64" style="margin: auto !important">
          <img :src="imgurl" :alt="imgdesc">
        </figure>
      </div>
      <div class="card-content pt-0">
        <div class="content has-text-centered">
          <span>
            {{imgdesc}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgurl: {
      type: String,
      required: true
    },
    imgdesc: {
      type: String,
      required: true
    }
  }
}
</script>
