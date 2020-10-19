<template>
  <div id="TodoList">
    <h1>TodoList</h1>
    <input v-model="text"/>
    <ul>
        <li v-for=" item in list" :key="item">
             {{item}}
        </li>
        <li></li>
        <li></li>
    </ul>
    <button @click="add">Add</button>
  </div>
</template>
<script>
export default {
    data: () => ({
        text:'',
        list:[],

    }),
    methods:{
        add(){
           this.list.push(this.text); 
           this.text="";
        }
    }
}
</script>