const modifiers = {
    sitenavTogglerActive: 'site-header__sitenav-toggler--active',
    siteHeaderActive: 'site-header--active'
}

const elSiteHeader = document.querySelector('.site-header');
const elSitenavToggler = elSiteHeader.querySelector('.site-header__sitenav-toggler');

if (elSitenavToggler) {
    elSitenavToggler.addEventListener('click', function () {
        elSitenavToggler.classList.toggle(modifiers.sitenavTogglerActive);

        elSiteHeader.classList.toggle(modifiers.siteHeaderActive);
    })
}