<template>
    <div class="ceshi">
        <p>测试1</p>
        <el-input v-model="ceshi1" @keyup.enter.native="handle1('测试1')"></el-input>
        <br>
        <p>测试2</p>
        <el-form>
            <el-input v-model="ceshi2" @keyup.enter.native="handle2('测试2')"></el-input>
        </el-form>
        <br>
        <p>测试3</p>
        <input type="text" autocomplete="off" class="el-input__inner"  @keyup.enter = "handle3($event,'测试3keyup')" @onkeydown = "handle3(event,'测试3onkeydown')"/>
        <br>
        <p>测试4</p>
        <el-form>
        <input type="text" autocomplete="off" class="el-input__inner" @keyup.enter = "handle4($event,'测试4keyup')" @onkeydown = "handle4(event,'测试4onkeydown')">
        </el-form>
        <el-button size="mini">
            <label for="upload" style="display:block;width: 49px;height: 25px;line-height: 25px;">
                <i class="el-icon-view"></i>
                <input type="file" accept="image/*" capture="camera" style="display:none" id="upload">
            </label>
        </el-button>
    </div>

</template>

<script>
export default {
  name: 'ceshi',
  data () {
    return {
        ceshi1: '',
        ceshi2:'',
        ceshi3:'',
        ceshi4:'',
    }
  },
  mounted () {
  },
  methods: {
      handle1(val){
          console.log(val)
          this.$bus.$emit('sendData', val)
      },
      handle2(val){
          alert(val)
      },
      handle3(e,val){
          alert(val)
          // if(e.keyCode==13){
          //     alert(val)
          // }
      },
      handle4(e,val){
          alert(val)
          // if(e.keyCode==13){
          //     alert(val)
          // }
      }
  }
}
</script>

<style lang="scss">

</style>
