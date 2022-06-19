<template>
  <div>
    <aplayer autoplay :music="songs2[0]">
    </aplayer>
    <audio :src="currentSrc" autoplay="" controls="" @ended="nextSong">
    </audio>
    <h2>{{ '歌曲:' + this.songs[currentIndex].name }}</h2>
    <p>{{ '歌手:' + this.songs[currentIndex].singer }}</p>
    <h3>歌曲列表</h3>
    <ul v-for="(song, index) in songs" :key="song.id">
      <li @click="playMusic(index)" :class="[song.id == currentIndex ? activeClass : '']">{{
          song.id + '、' + song.name
        }}
      </li>
    </ul>
  </div>
</template>

<img src="" height="3024" width="4032"/>
<script>

export default {
  name: 'musicByLin',
  data() {
    return {
      songs: [
        {id: 0, name: '漂洋过海来看你', singer: '王丽坤+朱亚文', src: '../../../../static/music/漂洋过海来看你-王丽坤+朱亚文.mp3'},
        {id: 1, name: '绿色', singer: '陈香凝', src: '../../../../static/music/绿色-陈香凝.mp3'},
        {id: 2, name: '清平调', singer: '王菲', src: '../../../../static/music/王菲 - 清平调.mp3'}
      ],
      currentIndex: 0,
      currentSrc: '../../../assets/IntoTheBlue.mp3',
      activeClass: 'active'
    }
  },
  methods: {
    nextSong() {
      // console.log(currentIndex)
      if (this.currentIndex < this.songs.length - 1) {
        this.currentIndex += 1
      } else {
        this.currentIndex = 0
      }
      this.currentSrc = this.songs[this.currentIndex].src
      console.log('currentIndex:' + this.currentIndex)
      console.log('currentSrc:' + this.currentSrc)
    },
    playMusic(id) {
      console.log('id:' + id)
      if (this.currentIndex !== id) {
        this.currentIndex = id
        this.currentSrc = this.songs[this.currentIndex].src
      }
    }
  }
}
</script>

<style scoped>
ul li {
  cursor: pointer;
  list-style-type: none;
  width: 100px;
}

.active {
  background-color: #1989FA;
}

</style>

