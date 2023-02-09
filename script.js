function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar a tag img
    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
     
        img.setAttribute('src', './assets/avatar-light.png', 'alt', 'mayk')
    } else { 
        
        img.setAttribute('src', './assets/avatar.png', 'alt',  'Foto de Artur Gomes usando um bone para tras, de camisa preta, em uma praia.') 
    }
     

    

    // substituir a imagem
    // se tiver o light mode, adicionar a imagem light
    // se tiver sem light mode, manter a imagem normal
}