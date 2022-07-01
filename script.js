const length = document.querySelector('[data-length]')
const slider = document.querySelector('[data-slider]')
const checkboxs = document.querySelectorAll('[data-checkbox]')
const password = document.querySelector('[data-password]')

const update = () => {
	var list = "abcdefghijklmnopqrstuvwxyz"
	if (checkboxs[0].firstChild.checked) list = list + "0123456789"
	if (checkboxs[1].firstChild.checked) list = list + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	if (checkboxs[2].firstChild.checked) list = list + "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
	var res = ""
	for (var i = 0; i < slider.value; i++) { res += list.charAt(Math.random() * list.length) }
	password.innerText = res
}

length.innerText = slider.value
update()

slider.addEventListener('input', () => {
	length.innerText = slider.value
	update()
})

checkboxs.forEach((checkbox) => {
	checkbox.firstChild.addEventListener('change', () => {
		update()
	})
})


