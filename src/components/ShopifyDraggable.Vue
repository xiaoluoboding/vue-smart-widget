<template>
  <el-card>
    <section ref="Flexbox" id="Flexbox" class="Flexbox" tabindex="0">
      <article class="BlockLayout BlockLayout--typeFlex" tabindex="0">
        <el-row type="flex">
          <el-col :span="12">
            <a href="#" class="Block Block--item1 Block--isDraggable" title="Click to drag" style="">
              <div class="BlockContent">
                <h3 class="Heading Heading--size2 text-no-select">One</h3>
                <div class="Pattern Pattern--typeHalftone"></div>
                <div class="Pattern Pattern--typePlaced"></div>
              </div>
            </a>
          </el-col>
          <el-col :span="12">
            <span class="Block Block--item2">
              <div class="BlockContent">
                <h3 class="Heading Heading--size2 text-no-select">Two</h3>
              </div>
            </span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <a href="#" class="Block Block--item3 Block--isDraggable" title="Click to drag" style="">
              <div class="BlockContent">
                <h3 class="Heading Heading--size2 text-no-select">Three</h3>
                <div class="Pattern Pattern--typeHalftone"></div>
                <div class="Pattern Pattern--typePlaced"></div>
              </div>
            </a>
          </el-col>
          <el-col :span="24">
            <a href="#" class="Block Block--item4 Block--isDraggable" title="Click to drag" style="">
              <div class="BlockContent">
                <h3 class="Heading Heading--size2 text-no-select">Four</h3>
                <div class="Pattern Pattern--typeHalftone"></div>
                <div class="Pattern Pattern--typePlaced"></div>
              </div>
            </a>
          </el-col>
        </el-row>
      </article>
    </section>
  </el-card>
</template>

<script>
import { Swappable, Plugins } from '@shopify/draggable'

export default {
  name: 'ShopifyDraggable',
  methods: {
    Flexbox () {
      const containers = this.$refs.Flexbox
      const swappable = new Swappable(containers, {
        draggable: '.Block--isDraggable',
        mirror: {
          constrainDimensions: true
        },
        plugins: [Plugins.ResizeMirror]
      })
      // console.log(swappable)
      swappable.on('onDragMove', function (e) {
        console.log(e)
      })
      return swappable
    }
  },
  mounted () {
    // console.log(Swappable)
    // console.log(Plugins.ResizeMirror)
    this.Flexbox()
  }
}
</script>

<style lang="less">
a {
  text-decoration: none;
}

.Block {
  display: Block;
  position: relative;
  flex: 1;
  padding: .8rem 0 0 .8rem;
}

.BlockContent {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  color: #fff;
  background-color: #212529;
  border: .6rem solid #212529;
  height: 13.6rem;
  .Heading {
    letter-spacing: -.01em;
    line-height: 1.2;
    color: currentColor;
  }
  .Heading--size2 {
    font-size: 4.2rem;
    font-weight: 700;
  }
}

.Block--isDraggable {
  .BlockContent {
    color: #212529;
    background-color: #fff;
    border-color: currentColor;
    transition: color .12s cubic-bezier(.64,0,.35,1),background-color .12s cubic-bezier(.64,0,.35,1),transform .24s cubic-bezier(.32,1.46,.54,1.28),-webkit-transform .24s cubic-bezier(.32,1.46,.54,1.28);
  }
  &.draggable-source--is-dragging .BlockContent,
  &:focus .BlockContent,
  &:hover .BlockContent {
    color: #0042ff;
  }
  &.draggable-source--is-dragging {
    .Pattern--typeHalftone {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      animation-play-state: running;
    }
  }
  &.draggable-mirror {
    z-index: 1000;
    .BlockContent {
      height: 100%;
      color: white;
      background-color: #0042ff;
      border-color: #0042ff;
      transform: scale(1.025);
    }
  }
}

@keyframes halftone {
  from {
    background-position: 0 0, 0.4rem 0.6rem;
  }

  to {
    background-position: 0.4rem 0.6rem, 0.8rem 1.2rem;
  }
}

.Pattern {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  &.Pattern--typeHalftone {
    background-image: radial-gradient(#0042ff 24%,transparent 25%),radial-gradient(#0042ff 24%,transparent 25%);
    background-position: 0 0,.6rem .6rem;
    background-size: 1.2rem 1.2rem;
    animation: halftone .48s steps(3) infinite both paused;
  }
}
</style>
