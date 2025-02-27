import style from './style.module.scss';

export function Logo () {
    return (
        <>
            <h1 className={style.logo}>Logo</h1>
        </>
    )
}

export function Logo2 () {
    return(
        <h1 className={style.logo2}>L</h1>
    )
}

export function MenuIcon () {
    return (
        <svg className={style.menu_icon} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><g id="Group_1042" data-name="Group 1042" transform="translate(-356 -25)"><rect id="Rectangle_578" data-name="Rectangle 578" width="20" height="3" rx="1.5" transform="translate(356 25)"></rect><rect id="Rectangle_579" data-name="Rectangle 579" width="20" height="3" rx="1.5" transform="translate(356 33)"></rect><rect id="Rectangle_580" data-name="Rectangle 580" width="20" height="3" rx="1.5" transform="translate(356 42)"></rect></g></svg>
    )
}
export function HomeIcon () {
    return (
        <svg className={style.icon} xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 22.571 20"><path id="home" d="M51.49,72.356H49.412v7.457a1.132,1.132,0,0,1-1.243,1.243H43.2V73.6H38.226v7.457H33.255a1.132,1.132,0,0,1-1.243-1.243V72.356H29.934c-.743,0-.584-.4-.075-.93l9.973-9.983a1.192,1.192,0,0,1,1.76,0l9.971,9.981C52.074,71.953,52.233,72.356,51.49,72.356Z" transform="translate(-29.426 -61.056)" fill="currentColor"></path></svg>
        
    )
}

export function StaffIcon () {
    return (
        <svg className={style.icon} xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 20 20"><path d="M137.5,140.015a17.622,17.622,0,0,1,6.579,1.374q3.421,1.374,3.421,3.6V147.5h-20v-2.515q0-2.222,3.421-3.6A17.622,17.622,0,0,1,137.5,140.015Zm0-2.515a4.992,4.992,0,0,1-4.971-4.971,4.882,4.882,0,0,1,1.462-3.538,4.874,4.874,0,0,1,7.018,0,4.882,4.882,0,0,1,1.462,3.538A4.992,4.992,0,0,1,137.5,137.5Z" transform="translate(-127.5 -127.5)"></path></svg> 
    )
}

export function VehicleIcon () {
    return (
        <svg className={style.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" ><path d="M48 0C21.5 0 0 21.5 0 48L0 368c0 26.5 21.5 48 48 48l16 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L48 0zM416 160l50.7 0L544 237.3l0 18.7-128 0 0-96zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
    )
}

export function SiteIcon () {
    return (
        <svg className={style.icon} version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 512 416"><g id="icomoon-ignore"></g><path d="M480,64H352V32c0-17.6-14.4-32-32-32H192c-17.6,0-32,14.4-32,32v32H32C14.4,64,0,78.4,0,96v288c0,17.6,14.4,32,32,32h448 c17.6,0,32-14.4,32-32V96C512,78.4,497.6,64,480,64z M192,32.1L192,32.1L319.9,32c0,0,0,0,0.1,0.1V64H192V32.1L192,32.1z M480,192.1 h-64v48c0,8.8-7.2,16-16,16h-32c-8.8,0-16-7.2-16-16v-48H160v48c0,8.8-7.2,16-16,16h-32c-8.8,0-16-7.2-16-16v-48H32v-32h448V192.1z"></path></svg>
    )
}

export function PartnerIcon () {
    return (
        <svg className={style.icon} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 25 15.791"><path id="handshake-o" d="M2.083,73.722a.7.7,0,0,0,0-1.389A.7.7,0,0,0,2.083,73.722Zm15.983-.629A38.639,38.639,0,0,0,15.4,69.816l-1.356,1.519a2.965,2.965,0,0,1-4.492-.065,2.644,2.644,0,0,1,.022-3.418l1.921-2.235a4.769,4.769,0,0,0-2.214-.228,2.433,2.433,0,0,0-1.714.716L5.849,67.819H4.167v5.9c.477,0,.911-.065,1.291.3l3.223,3.168a3.716,3.716,0,0,0,2.463,1.2,1.938,1.938,0,0,0,1.356-.51,1.579,1.579,0,0,0,2.007-1.009,1.746,1.746,0,0,0,1.378-.477,1.54,1.54,0,0,0,.543-1.042.765.765,0,0,0,.467.109A1.444,1.444,0,0,0,18.066,73.093Zm1.725.629h1.042V68.167H19.824l-1.7-1.953a2.46,2.46,0,0,0-1.834-.825H14.475a2.1,2.1,0,0,0-1.584.727l-2.268,2.637a1.263,1.263,0,0,0-.011,1.628,1.591,1.591,0,0,0,2.4.033L15.1,68.047a.7.7,0,0,1,1.183.673c.412.477.857.944,1.259,1.421.543.673,1.063,1.378,1.6,2.062A3.085,3.085,0,0,1,19.792,73.722Zm3.125,0a.7.7,0,0,0,0-1.389A.695.695,0,0,0,22.917,73.722ZM25,67.472v6.944a.7.7,0,0,1-.694.694H19.6a2.832,2.832,0,0,1-2.246,1.714A3.3,3.3,0,0,1,15.365,78.2a3.016,3.016,0,0,1-2.528,1.15c-1.79,1.009-3.809.13-5.143-1.183l-3.114-3.06H.694A.7.7,0,0,1,0,74.417V67.125a.7.7,0,0,1,.694-.694H5.263C6.521,65.172,7.389,64,9.277,64h1.27a3.5,3.5,0,0,1,1.964.608A3.5,3.5,0,0,1,14.475,64h1.812c2.062,0,2.919,1.345,4.167,2.778h3.852A.7.7,0,0,1,25,67.472Z" transform="translate(0 -64)"></path></svg>
    )
}

export function ScheduleIcon () {
    return (
        <svg  className={style.icon} version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 530.1 605.8"><g id="icomoon-ignore"></g><path id="Icon_awesome-calendar-alt" d="M0,549c0,31.4,25.4,56.8,56.8,56.8l0,0h416.5c31.4,0,56.8-25.4,56.8-56.8l0,0V227.2H0V549z M378.6,317.1c0-7.8,6.4-14.2,14.2-14.2h47.3c7.8,0,14.2,6.4,14.2,14.2v47.3c0,7.8-6.4,14.2-14.2,14.2h-47.3 c-7.8,0-14.2-6.4-14.2-14.2V317.1z M378.6,468.6c0-7.8,6.4-14.2,14.2-14.2h47.3c7.8,0,14.2,6.4,14.2,14.2v47.3 c0,7.8-6.4,14.2-14.2,14.2h-47.3c-7.8,0-14.2-6.4-14.2-14.2V468.6z M227.2,317.1c0-7.8,6.4-14.2,14.2-14.2h47.3 c7.8,0,14.2,6.4,14.2,14.2v47.3c0,7.8-6.4,14.2-14.2,14.2h-47.3c-7.8,0-14.2-6.4-14.2-14.2V317.1z M227.2,468.6 c0-7.8,6.4-14.2,14.2-14.2h47.3c7.8,0,14.2,6.4,14.2,14.2v47.3c0,7.8-6.4,14.2-14.2,14.2h-47.3c-7.8,0-14.2-6.4-14.2-14.2V468.6z M75.7,317.1c0-7.8,6.4-14.2,14.2-14.2h47.3c7.8,0,14.2,6.4,14.2,14.2v47.3c0,7.8-6.4,14.2-14.2,14.2H89.9 c-7.8,0-14.2-6.4-14.2-14.2V317.1z M75.7,468.6c0-7.8,6.4-14.2,14.2-14.2h47.3c7.8,0,14.2,6.4,14.2,14.2v47.3 c0,7.8-6.4,14.2-14.2,14.2H89.9c-7.8,0-14.2-6.4-14.2-14.2V468.6z M473.3,75.7h-56.8V18.9C416.5,8.5,408,0,397.6,0h-37.9 c-10.4,0-18.9,8.5-18.9,18.9v56.8H189.3V18.9c0-10.4-8.5-18.9-18.9-18.9h-37.9c-10.4,0-18.9,8.5-18.9,18.9v56.8H56.8 C25.4,75.7,0,101.2,0,132.5v56.8h530.1v-56.8C530.1,101.2,504.7,75.7,473.3,75.7z"></path></svg>
    )
}

export function NotificaitonIcon () {
    return (
        <svg className={style.notification_icon} id="Layer_1" fill='currentColor'  version="1.1" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg" ><g><path d="M381.7,225.9c0-97.6-52.5-130.8-101.6-138.2c0-0.5,0.1-1,0.1-1.6c0-12.3-10.9-22.1-24.2-22.1c-13.3,0-23.8,9.8-23.8,22.1   c0,0.6,0,1.1,0.1,1.6c-49.2,7.5-102,40.8-102,138.4c0,113.8-28.3,126-66.3,158h384C410.2,352,381.7,339.7,381.7,225.9z"/><path d="M256.2,448c26.8,0,48.8-19.9,51.7-43H204.5C207.3,428.1,229.4,448,256.2,448z"/></g></svg>
    )
}

export function FaSun () {
    return (
        <svg className={style.icon} enable-background="new 0 0 512 512"  id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px"  xmlns="http://www.w3.org/2000/svg" ><g><g><path d="M256,144c-61.75,0-112,50.25-112,112s50.25,112,112,112s112-50.25,112-112S317.75,144,256,144z M256,336    c-44.188,0-80-35.812-80-80c0-44.188,35.812-80,80-80c44.188,0,80,35.812,80,80C336,300.188,300.188,336,256,336z M256,112    c8.833,0,16-7.167,16-16V64c0-8.833-7.167-16-16-16s-16,7.167-16,16v32C240,104.833,247.167,112,256,112z M256,400    c-8.833,0-16,7.167-16,16v32c0,8.833,7.167,16,16,16s16-7.167,16-16v-32C272,407.167,264.833,400,256,400z M380.438,154.167    l22.625-22.625c6.25-6.25,6.25-16.375,0-22.625s-16.375-6.25-22.625,0l-22.625,22.625c-6.25,6.25-6.25,16.375,0,22.625    S374.188,160.417,380.438,154.167z M131.562,357.834l-22.625,22.625c-6.25,6.249-6.25,16.374,0,22.624s16.375,6.25,22.625,0    l22.625-22.624c6.25-6.271,6.25-16.376,0-22.625C147.938,351.583,137.812,351.562,131.562,357.834z M112,256    c0-8.833-7.167-16-16-16H64c-8.833,0-16,7.167-16,16s7.167,16,16,16h32C104.833,272,112,264.833,112,256z M448,240h-32    c-8.833,0-16,7.167-16,16s7.167,16,16,16h32c8.833,0,16-7.167,16-16S456.833,240,448,240z M131.541,154.167    c6.251,6.25,16.376,6.25,22.625,0c6.251-6.25,6.251-16.375,0-22.625l-22.625-22.625c-6.25-6.25-16.374-6.25-22.625,0    c-6.25,6.25-6.25,16.375,0,22.625L131.541,154.167z M380.459,357.812c-6.271-6.25-16.376-6.25-22.625,0    c-6.251,6.25-6.271,16.375,0,22.625l22.625,22.625c6.249,6.25,16.374,6.25,22.624,0s6.25-16.375,0-22.625L380.459,357.812z" fill="#1D1D1B"/></g></g></svg>
    )
}

export function FaMoon () {
    return (
        <svg className={style.icon} enable-background="new 0 0 500 500"  id="Layer_1" version="1.1" viewBox="0 0 500 500" width="500px"  xmlns="http://www.w3.org/2000/svg" ><path clip-rule="evenodd" d="M46.077,249.5c0,112.939,91.485,204.422,204.424,204.422  c112.931,0,204.422-91.483,204.422-204.422c0-112.93-91.491-204.423-204.422-204.423C137.563,45.077,46.077,136.57,46.077,249.5z   M91.506,249.5c0-46.332,19.804-88.033,51.425-117.108c0,0,2.537-2.459,3.265-3c2.271-1.729,5.181-2.812,8.357-2.812  c7.541,0,13.627,6.087,13.627,13.627c0,0.995-1.171,6.629-1.171,6.629c-1.829,9.715-2.822,19.714-2.822,29.979  c0,87.858,71.14,158.995,158.997,158.995c9.9,0,19.536-0.9,28.89-2.632l4.364-1.006c0.992-0.175,1.994-0.354,3.087-0.354  c7.543,0,13.63,6.087,13.63,13.629c0,3.362-1.181,6.354-3.18,8.716c-0.371,0.459-2.365,2.907-3.088,3.637  c-28.984,31.256-70.41,50.696-116.388,50.696C162.645,408.496,91.506,337.354,91.506,249.5z" fill="#010101" fill-rule="evenodd"/></svg>
    )
}

export const RightIcon = () => {
    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122l5.658 5.657Z"/></g></svg>
        </>
    )
}

// AZM
export const FilterIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={style.icon_size} viewBox="0 0 24 24"><path fill="currentColor" d="M6.532 4.75h6.936c.457 0 .854 0 1.165.03c.307.028.685.095.993.348c.397.326.621.814.624 1.322c.002.39-.172.726-.34.992c-.168.27-.411.59-.695.964l-.031.04l-.01.013l-2.555 3.369c-.252.332-.315.42-.359.51a1.2 1.2 0 0 0-.099.297c-.02.1-.023.212-.023.634v4.243c0 .208 0 .412-.014.578c-.015.164-.052.427-.224.663c-.21.287-.537.473-.9.495c-.302.019-.547-.103-.69-.183c-.144-.08-.309-.195-.476-.31l-.989-.683l-.048-.033c-.191-.131-.403-.276-.562-.477a1.7 1.7 0 0 1-.303-.585c-.071-.244-.07-.5-.07-.738v-2.97c0-.422-.004-.534-.023-.634a1.2 1.2 0 0 0-.1-.297c-.043-.09-.106-.178-.358-.51L4.825 8.459l-.01-.012l-.03-.04c-.284-.375-.527-.695-.696-.965c-.167-.266-.34-.602-.339-.992a1.72 1.72 0 0 1 .624-1.322c.308-.253.686-.32.993-.349c.311-.029.707-.029 1.165-.029m.397 4l1.647 2.17l.035.047c.201.264.361.475.478.715q.154.317.222.665c.051.261.05.527.05.864v2.968c0 .158.001.247.005.314l.006.062a.2.2 0 0 0 .036.073l.041.034c.05.04.12.088.248.176l.941.65V13.21c0-.337 0-.603.051-.864q.068-.347.222-.665c.117-.24.277-.45.478-.715l.035-.046l1.646-2.17zm7.28-1.5c.195-.26.334-.45.43-.604c.08-.126.104-.188.11-.207a.22.22 0 0 0-.057-.134a1 1 0 0 0-.2-.032c-.232-.022-.556-.023-1.06-.023H6.568c-.504 0-.828 0-1.06.023a1 1 0 0 0-.2.032a.22.22 0 0 0-.057.134c.006.019.03.081.11.207c.096.155.235.344.43.604zm1.541 3.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m-1.5 2.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75m-.5 2.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m0 2.5a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75"/></svg>
    )
}

export const SortingIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={style.icon_size} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 10h7m-7 4h5m-5 4h3M11 6h10M7 18.813C6.607 19.255 5.56 21 5 21m-2-2.187C3.393 19.255 4.44 21 5 21m0 0v-6M3 5.188C3.393 4.745 4.44 3 5 3m2 2.188C6.607 4.745 5.56 3 5 3m0 0v6" color="currentColor"/></svg>
    )
}

export const PlusIcons = () => {
    return (
<svg xmlns="http://www.w3.org/2000/svg" className={style.icon_size} viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/></svg>    )
}

export const SearchIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={style.icon_size} viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/></svg>
    )
}

export const CloseIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={style.icon_size} viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"/></g></svg>
    )
}

export const ImageAddIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"className={style.icon_size} width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M19 10a1 1 0 0 0-1 1v3.38l-1.48-1.48a2.79 2.79 0 0 0-3.93 0l-.7.71l-2.48-2.49a2.79 2.79 0 0 0-3.93 0L4 12.61V7a1 1 0 0 1 1-1h8a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v12.22A2.79 2.79 0 0 0 4.78 22h12.44a3 3 0 0 0 .8-.12a2.74 2.74 0 0 0 2-2.65V11A1 1 0 0 0 19 10M5 20a1 1 0 0 1-1-1v-3.57l2.89-2.89a.78.78 0 0 1 1.1 0L15.46 20Zm13-1a1 1 0 0 1-.18.54L13.3 15l.71-.7a.77.77 0 0 1 1.1 0L18 17.21Zm3-15h-1V3a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V6h1a1 1 0 0 0 0-2"/></svg>
    )
}


export const AddCarIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 30 27.214"><g id="vehicles-truck-hammer-plus02" transform="translate(-1 -67.7)"><path id="Path_277" data-name="Path 277" d="M16.578,89.5l-4.651-4.651a.743.743,0,0,0-1.047,0l-.349.349L7.692,82.357l4.66-4.657H7.416L5.226,79.891l-.217-.217H3.962v1.047l.217.217L1,84.116l2.469,2.469,3.179-3.179,2.839,2.839-.352.349a.743.743,0,0,0,0,1.047l4.651,4.651a.743.743,0,0,0,1.047,0l1.745-1.745a.747.747,0,0,0,0-1.05Z" transform="translate(0 -9.707)" fill="currentColor"></path><g id="Group_2355" data-name="Group 2355" transform="translate(24.431 67.7)"><path id="Path_278" data-name="Path 278" d="M806.205,166.586h-5.871a.334.334,0,0,1-.334-.334v-.117a.334.334,0,0,1,.334-.334H806.2a.334.334,0,0,1,.334.334v.117A.33.33,0,0,1,806.205,166.586Z" transform="translate(-800 -162.923)" fill="currentColor"></path><path id="Path_279" data-name="Path 279" d="M898.1,73.9V68.034a.334.334,0,0,1,.334-.334h.117a.334.334,0,0,1,.334.334V73.9a.334.334,0,0,1-.334.334h-.117A.331.331,0,0,1,898.1,73.9Z" transform="translate(-895.223 -67.7)" fill="currentColor"></path></g><path id="Path_280" data-name="Path 280" d="M122.742,330.586l-3.754-5.631a2.811,2.811,0,0,0-2.343-1.255h-5.631v8.446a.937.937,0,0,1-.938.938H96v4.692a2.82,2.82,0,0,0,2.815,2.815h1.07a3.735,3.735,0,0,0,7.24,0h4.956a3.735,3.735,0,0,0,7.24,0H120.4a2.82,2.82,0,0,0,2.815-2.815v-5.63A2.812,2.812,0,0,0,122.742,330.586Zm-3.282,2.5a.937.937,0,0,1-.938.938h-3.754a.937.937,0,0,1-.938-.938v-5.63a.937.937,0,0,1,.938-.938h.938a.938.938,0,0,1,.78.416l2.815,4.223a.949.949,0,0,1,.158.522Z" transform="translate(-92.214 -248.493)" fill="currentColor"></path></g></svg>
    )
}

export const AddStaffIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 30.001 29.874"><g id="person_puls" transform="translate(-127.6 -49.6)"><path id="Path_26" data-name="Path 26" d="M140.747,143.953a23.316,23.316,0,0,1,8.656,1.8q4.507,1.8,4.5,4.726v3.306H127.6v-3.3q0-2.922,4.5-4.726A23.276,23.276,0,0,1,140.747,143.953Zm0-3.306a6.564,6.564,0,0,1-6.538-6.535,6.432,6.432,0,0,1,1.923-4.654,6.418,6.418,0,0,1,9.23,0,6.415,6.415,0,0,1,1.923,4.654,6.564,6.564,0,0,1-6.538,6.535Z" transform="translate(0 -74.316)" fill="currentColor"></path><g id="Group_252" data-name="Group 252" transform="translate(147.344 49.6)"><path id="Path_27" data-name="Path 27" d="M507.732,148.933h-9.207a.524.524,0,0,1-.525-.525v-.184a.524.524,0,0,1,.525-.525h9.207a.524.524,0,0,1,.525.525v.184A.524.524,0,0,1,507.732,148.933Z" transform="translate(-498 -143.186)" fill="currentColor"></path><path id="Path_28" data-name="Path 28" d="M596,59.332V50.125a.524.524,0,0,1,.525-.525h.184a.524.524,0,0,1,.525.525v9.207a.524.524,0,0,1-.525.525h-.184A.524.524,0,0,1,596,59.332Z" transform="translate(-591.491 -49.6)" fill="currentColor"></path></g></g></svg>
    )
}

export const CloseEyeIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="36" viewBox="0 0 36 36"><path fill="currentColor" d="M18.37 11.17a6.8 6.8 0 0 0-2.37.43l8.8 8.8a6.8 6.8 0 0 0 .43-2.4a6.86 6.86 0 0 0-6.86-6.83" class="clr-i-solid clr-i-solid-path-1"/><path fill="currentColor" d="M34.29 17.53c-3.37-6.23-9.28-10-15.82-10a16.8 16.8 0 0 0-5.24.85L14.84 10a14.8 14.8 0 0 1 3.63-.47c5.63 0 10.75 3.14 13.8 8.43a17.8 17.8 0 0 1-4.37 5.1l1.42 1.42a19.9 19.9 0 0 0 5-6l.26-.48Z" class="clr-i-solid clr-i-solid-path-2"/><path fill="currentColor" d="m4.87 5.78l4.46 4.46a19.5 19.5 0 0 0-6.69 7.29l-.26.47l.26.48c3.37 6.23 9.28 10 15.82 10a16.9 16.9 0 0 0 7.37-1.69l5 5l1.75-1.5l-26-26Zm8.3 8.3a6.85 6.85 0 0 0 9.55 9.55l1.6 1.6a14.9 14.9 0 0 1-5.86 1.2c-5.63 0-10.75-3.14-13.8-8.43a17.3 17.3 0 0 1 6.12-6.3Z" class="clr-i-solid clr-i-solid-path-3"/><path fill="none" d="M0 0h36v36H0z"/></svg>
    )
}

export const OpenEyeIcon =() => {
    return (

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="36" viewBox="0 0 36 36"><path fill="currentColor" d="M33.62 17.53c-3.37-6.23-9.28-10-15.82-10S5.34 11.3 2 17.53l-.28.47l.26.48c3.37 6.23 9.28 10 15.82 10s12.46-3.72 15.82-10l.26-.48Zm-15.82 8.9C12.17 26.43 7 23.29 4 18c3-5.29 8.17-8.43 13.8-8.43S28.54 12.72 31.59 18c-3.05 5.29-8.17 8.43-13.79 8.43" class="clr-i-solid clr-i-solid-path-1"/><circle cx="18.09" cy="18.03" r="6.86" fill="currentColor" class="clr-i-solid clr-i-solid-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>
    )
}