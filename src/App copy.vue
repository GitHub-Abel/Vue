<template>
  <div id="app">
    <h1>{{ count }}</h1>
    <h1 v-if="count% 2===0">Even</h1>
    <button @click="count++">Add</button>


    <ol>
      <li  v-for = "text in list" :key ="text">
        {{text}}
      </li> 
    </ol>

    <input v-model="input"/>
    <h1>{{ input }}</h1>
  </div>
</template>
 
<script>
export default {
  data(){
    return { 
      count: 0 ,
      list:[
        'Learn JavaScript',
        'Learn Vue',
        '$pri$'
,

      ],
      input:'',
          methods:{ 
            add(){
          this.count++;
        }
      }
    }
  }

  
}
</script>
