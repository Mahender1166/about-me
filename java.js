

// for vue component
const mult = (a,b) =>{return a*b}

const mul = new Vue({
    el : '#mul',
    data : {
        mul: 0,
        vva : 5,
        vvb : 4
    } ,
    computed: {
        result: function(){
            const v1 = parseInt(this.vva);
            const v2 = parseInt(this.vvb);
            return `${mult(v1,v2)}.`
        }
    }
})

// for json object 
const albURI = 'https://jsonplaceholder.typicode.com/albums'
let i = 0;

// fetch information
const getalbum = async () => {
  try {
    const response = await fetch(albURI)
    const obj = await response.json()
    console.log(`FETCHED. Response JSON ${obj[0]}`)
    // const joke = obj.value.joke || 'No joke for you.'
    const ab=obj[i] || `no oject found`
    i++;
    return ab
  } catch (error) { console.error(error) }
}

// interact with DOM
const updateWithAlbum = async (event) => {
  try {
    document.querySelector('#result').innerHTML = ''
    const answer = await getalbum()
    document.querySelector('#result').innerHTML = answer.title
  } catch (error) { console.error(error) }
}


document.addEventListener('click', event => {
    if (event.target && event.target.id === 'fetching') { updateWithAlbum(event) }
  })
  