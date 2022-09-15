const nftImage = document.querySelector('.main__nft-card--image');
nftImage.addEventListener('mouseenter', (e)=> {
    e.target.classList.add('active');
});

nftImage.addEventListener('mouseleave', (e)=> {
    e.target.classList.remove('active');
});

