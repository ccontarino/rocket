import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

function LaunchDetails(launch) {

    const loadFavorite = () => {

        console.log(localStorage.getItem('launch'), "localStorage.getItem('launch')");
        return (localStorage.getItem('launch') === launch.flight_number)


    }


    const [favoriteLaunch, setfavoriteLaunch] = useState(loadFavorite());
    const style = {
        launchDetailContainer: {
        }
    }
    const addTofavorite = (launch) => {
        localStorage.setItem('lauch', launch.flight_number);
        setfavoriteLaunch(true);
        window.alert('guardado en favoritos');
    }

    return (
        <Grid container onClick={addTofavorite} style={style.launchDetailContainer}>
            <Grid xs={12}>
                <Grid xs={8}>
                    <img style={{ height: 50, width: 50 }}
                        alt="heart" src={favoriteLaunch ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQiMhWB9c2QJaT0jrS_uNfz4vVPmW2ocsFuw&usqp=CAU' : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAolBMVEXHXFz///+1VFTGWFjFU1PEUFDGWVnFVVXDTU3OcXHBWVm0UVGxSEi4VVWyS0vFW1vw1tbMa2v89/fKZWXYkpL57u7doaHJYWHVior04eHRfX37+fnszs7gqany29vmvb3UhYX25ublubnpxMTamZnjsbHPdXXbubnlzc3NmZm6Z2fSgIDfwcHKkZG3XFywQ0PGh4fAeHjTp6fPnp6/dHS5Y2NnEYgWAAANUklEQVR4nN2deZuqOgzGK7SAo+MoihtuuMzmLGfO8v2/2m1BFJUtadnu++d57szlN0mTFtKEtAqX66x26+14tNm0Qx03o/F2ves7bvH/e1Lg77ad/mF/HJgWo5SauhGVbvJ/Y5Y5OO4Pfccu8CmKInQW4+NAZwKMpEmgMn1wHC+8gp6kCEJnt+dwWWw3nMwcjnZOAU+jmtBeLdsWNfPDRTGpNVj2VXusUkJ7MZpYKLozpWlNRgulkAoJ+6MJk8I7SWccUt1jqSJ0lroSvBDSHHuKnkwJob07WlQV3UmmNd8p8VYFhM5hyHTFfEIGmywVBFdpQmevU2XeectI9ZFXMaE3tcyC8AKZ1mZWIaE3sopwz2vp1lSKUYLQGZnF2i+UaU69CgjdJSuHz2dkY3RcxRLuJqrTQ7ooWZdKOJuzouJnotjzqjzCpVl8gLmXTsclEa5KdtCLKOmXQOiOrdId9CzD2oMjDpRw1q7KgIHoALoagYTb8iPMjQx2KJDQnrOK+YTYM2g/DiFcTcrL8WnSQQEHQLgu7AwBlUEBnpqfcFQHDw3FpsoJ7edqY+it6CDvYsxJ6A3qsQQv0oc5z1T5CFekim1augw9X7zJRbiocBuTLMPaqSLcWVXDJMjKc6LKQbiuV4yJKs/+JptwW6cscSu2lCfc1tVFA1mZiFmE6zpbUCjTUTMId/Vdg6FoRrhJJ1zU20UDZSSNVMJVEwA5YmrqTyP0SB0T/b0MPW0Dl0JoD+q3VYuXMUx5e5NC+Fy3zXay9AGGcFT/MHoRTT4vJhLWeitzr+S0mES4apIFhWhScUMCoTNpRhi9yCAJh/4Ewnlzokwo/RlCeGjWIgyUcM6IJZw1EZAjxu5t4gjddtMWYaD4xB9HOG5aHA1FR/kIG7LfjpMVkzJiCBuXKCLS78uq7wmXTfVRIXOfTThrXiaMit7F0zvCeVOOTPEy2lmEu2amwovYNp3QbcixPkW6nUrY6DATiO7TCJ2m+6gQ81IIp80OpIH0TTJhwzNFKLpKJBz9PwivjRgl9Jq7Ib2WtUognDY72V+kH+MJlZhQ3LpjXBR298m4/BjgQliirFksoewqNExmkOlyvev3+4v1YT8waK4aI/GfDfYH/+d26+V0YkjfvtGncYSOnI/qbHB7u86ebedmBiTHe96urrch9mI/kCwiN70YQqntjMmm/dgbr962nVLIYbDhwYv7Mbc/MmWeJ1JOfCa0h3jPMK1xSoXSIomR86V8+rOXUpdVzm5xJsQfKnSaVbjbH8TZgw4z7uC5Y3w9+eWIcSZEnwtz1dDf174bdJx9kdtDF7Qa5/fDISE2VRhWvkJI76byzxzkK0tDFyWfE0ZIOMb5vE5yl11fVW/mr56cIct2z29sQkKcj9I5oCB5fclykApYe4MLqtS9Ilyg/J1ukh8sRovwUVmukruzcLW7dHdFOMLYMOXDawJisNjj3tuqRwxPGAGhPcEAxr1DT9dKrKnEb5nJ2qMc1YkQYpw06XtdqnjWZZhLaEdEuDmthYAQ4aQGQd0IPGSX2sXJRey4Tm7qE9rgn745ZUIQcT/mIYwYvFf0CfvwdA+J90qEKJJkizMhPN1fnaLLEfz4GiR9n3AAdvKbd5JlyAETGpOQ0AE7Ke42p6TgNUyWdyIEl8kGf5zSBXY1uj0RgnMFKqXJC3yE9fOFIITmGmNSZOeqFIGNOAkIwamm9EwRCnzzw5z5hPAtWxENq/LIhhZRiPMFgWdDHXqkUKc98FFFRiTwNzRMYRMnoFZAdxNva0jLhq5fWhkgvNZn4nBC6F6hQieFuynfe5FWH2j5rDsqhQoaFfkZkbQOwBDsb4WqEnSDaS45IXRHY5TQkTNZwKDBlxSBhlJjXiUg9CsuD6bEhf5V4O+fVAp8lHWJDVyGlW3ZAkHPQZZNoGu30lAKD6bWjECTRYU7GiH44xKo2eML4ksT9BoBXRPoicSSbPInKehXQLolB+g+CPmeVJFm4JRPoOG34nUIjTT6nkALoSqOpdB3NfqUHKFnp2rz4QswbBhzMgcSxtT7l6nfUMI2gd5x0j8rJXyD7toGcMKfSgl/Qd/tDjkjUF+VEr6DX5lyRqC+q3qXKOR+Qx+XwAlZlZsarwxC+lIh4QeiZAFMWGkwfUNUxYBvxD5oFRJ+PUD5hnDCp251ocbuPsEJoXsaQroflRG+wgnbCMLOr8oIP3vQhzWewWcLQh6/qnpj6n49ggmPZAwmfOi+VkS46oIDjT4Cn/F5qOn9qYjwTw9MaI7JFp5DtYrc1P3qgJ+VHsDv2rgeK4qmr13wMhTv2qAvILkeOtWcoH46cEK2IIgi/SetkvOF962BlyE/JxAbbsMnrVfF3vSzp4HzvfhugalNfdR65RvR6WpwJxXfnlrwTQ3ffFeQMP70EE5qtBHfgIU0TSvbiE5H0+AP6n8DxtzK40Z8K5mQr0KEk5pjToip03/StK5XKuDsW0PEGVH2RVoe5i7Do1ZyTvzbQcUZNhM1UZirlQ+a9l3m/vuDmxAeZ041UZhg6huxxN2pCDMYEwZ1beBKKl/ciCUGm189nAlF4QjBdkN+5MGmLD/96OJM6H8KxNQI++JGLMtPHW5BlAkJDWqEke3LuBF75byxeUeuQq5WQIjrh8FzotYt4/33H2FCRC483ewRhMjRANyIWq/4ugWxCHE+GnyvFoTIe9zCiJ3C96crYUGkj/qVMf69J2Q7hQeB+F5stHH4HxHpo8Rfhti7a4F8Py109+Z8ddA+eiqj9AlxN7mJf4oqNKC6IoxiffR0TTa4Q4pt+iGWotYt7JWG+y4WIeJYGIg6Z0J8/6QHH7Go7dtfHxDpo+Et0IAQ39hELEXt+3chgL+kAIO7eSGhg/0tJ8RuEYgBIHYRchtG7+NLtPnyl6L2rXwt2u+ygKeS+xOhxLSVALGrOKI6/zo+IDYTXkoMT4SuRFOmALH3ozL1z/w8iE/1XMy5IsQdg096CBDf1d0sfe1JA55bC4aE0NrbGMTOl6paopdvTRbwMnzm3CfqWaYJ3Amxp+Qw5X525QGN89SSM6HcxI4AUUnu94IgKgcYKfS99GuT+X1nxN677Gnq4ztYgvg04Us/P8el555kN/0govKzjtTrKfft5KESaUIoUsl8IcS9kLpHlPHUVeihkoD+K6g7Qun2pSdErfcPG1P/dDuaChe9ar0SIZRKGL4eT2bE7cRX/04eit9sh4q2B4r2oJVvOH+KN1r3HWxG93doQHlAI9rCKkqoYLBFiNjpvcE2ca//TitQ2kPJzai5q17QG/lGwk+P4WrUAEU3zo86A15OFTGESsZYhYid75+crhpxUBWANxcIr3uyKzDixVO5q37myf8vX2GEUeGhtya8IVQ0Bik0o9brZEbV13e1Bry7A3ozG0HmEBXR2YycMXU33n//PvPJZvmTzJuuFjeEtqK+8+eAwzPH10tSWH39e+FTZMDLyTeBUN1QwIsZOwmMr38v/qlmBQrR266Fd3Nm1M3rijJqv29fALz8i/KpcVAizoW3f8w7wr66KSURV9V635+R3OH97kT4lDkoibvEez/vSVGw8fUQZez+fAR/39dfvZ4W4VNmwPswE0voKp2Q8BBB4Qvybeb9ibqnSgcVYvdvw2Kmkike5HzF2Ot2e8XxxTYojpudp3iK7FOU8UqK+YgZ17k5jlCmxX6s4hlV8yWMIo2dYYmobs/SHaPC+Bkqvol2/BzSZQFzn6Jx9bEAvrtRVqmErXYRI2dCZ1Xunr6MhMnVSfOAjULmrz09PD6qTH9R0YTTaNJMZ3TxQlVK7GSfOJe7iKVYoJL7/ibPVse0Qa9MZnKD+GRCe9icAVdpXXGTCRs0fdwgXjJGCmEwyaAJuh+vmpNQ9R68KFmpA0FSCVvbJiBmzPJJJ2zCGPmEofF5CeufFllWA/wswta43o7KMltxZhK2xnW2YjZgDsI6O2qmi+YjbB3q6qi5ZtbkIaxr0sg38i0XYWshOzazABk03+SvfISt1aRu23DDyNlINSdhyxnWa5OqEy/nk+clbNnHOoVU+py71DM3ocgatVmMebIEgpDHm3osxrwxBk7Y8mInppYtOgSVI4EIxRauak81GLCBKpCwtUCOBVUlk8DmX8IJW860yg0OO4IrdMGE4m5GVWY0MaO0EIQte1TJajTYFHPfAUMoxlCXn/4zh1wrJWy5h5Jd1WRL5IUVJKHvquXlf51N0XcA0IT8vHGk5TDqdC4xkEGCkC/HY8Lke5UyLBk+SULO+GwVa0fdakuOKpAk5L66KTDmmFL+qYiw1ZrtdVqEsxpUHym4DaeAkO/kDgPlzqpbw4OSjhRKCLn6U6YwsuqUTVXNs1FFyBPkdq4rgeS/Zb5Vdx9VHSGXsz1SJhd3dEbnW0/lQykl5HJ2I91CmtKgljnaqW4Ho5pQaHaYE0p1SHw1dErJ/FBEP58iCIVm69EzYdTM5DR0kzLSnq5XBTW6KYpQyJmtx5u2YTFKTY4aYTUMAUYps/TBZryeFdmoqEjCQK6z2m0P4+m83Q4BB+32Zjo+bHcrp/h+aP8BFovlaFatolYAAAAASUVORK5CYII="}></img>
                </Grid>
            </Grid>
            <Grid xs={12}>
                <img alt="rocket" src="https://img.freepik.com/vector-gratis/lanzamiento-pagina-web_1212-24.jpg?size=338&ext=jpg&ga=GA1.2.1521020207.1623024000"></img>
                <div>description of a rocket{launch.datails}</div>
            </Grid>
        </Grid>
    )
}

export default LaunchDetails
