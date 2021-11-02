const todos = (() => {

    
    document.addEventListener('focusout', function(e) {
        if (e.target.closest('.input__textarea')) {
            handleInputBlur(e)
        }
    })

    document.addEventListener('click', function(e) {
        if (e.target.closest('.input__checkbox')) {
            clickUpdateHandler(e)
        }

        if (e.target.closest('.options__add-todo')) {
            e.preventDefault()
            addNewTodoHandler(e)
        }

        if (e.target.closest('.input__textarea')) {
            e.stopPropagation()
        }

        if (e.target.closest('.input__trash')) {
            e.stopPropagation()
            handleDeleteToDo(e)
        }
    })

    document.addEventListener('change', function(e) {
        if (e.target.closest('.input__checkbox')) {
            handleInputChange(e)
        }
    })

    async function clickUpdateHandler(e) {
        const { url } = e.target.dataset
        const id = parseInt(url.split('/')[4])
        if (id === 0) return 0
        
        const response = await getJSON(url, { method: 'POST' })
        e.target.checked = await response.done
    }

    async function addNewTodoHandler(e) {
        const todos = document.querySelector('.todos')
        const url = e.target.closest('.options__add-todo').href

        const response = await getHTML(url, { 
            method: 'GET',
        })
        
        const data = await response
        const parser = new DOMParser()
	    var html = parser.parseFromString(data, 'text/html')
        todos.appendChild(html.body.firstChild)
    }

    async function getJSON(url, options) {
        const headers = { headers: { 'Content-Type': 'application/json' } }
        const response = await fetch(url, {...headers, ...options})
        return await response.json()
    }

    async function getHTML(url, options) {
        const headers = new Headers();
        headers.append('Accept', 'text/html');

        const response = await fetch(url, { method: 'GET', headers: headers })
        return await response.text()
    }

    function handleInputChange(e) {
        const checked = e.target.checked
        const target = e.target.closest('.todos__todo').querySelector('.input__textarea').classList

        if (checked) {
            target.add('line-through')
        } else {
            target.remove('line-through')
        }
    }

    async function handleInputBlur(e) {
        const parent = e.target.closest('.todos__todo')
        const checkbox = parent.querySelector('.input__checkbox')
        const id = parseInt(parent.dataset.id)

        if (id === 0) {
            const response = await getJSON('/api/v1/todos/', {
                method: 'POST',
                body: JSON.stringify({ content: e.target.innerHTML, done: checkbox.checked })
            })
            const data = await response
            parent.dataset.id = data.id
            checkbox.dataset.url = checkbox.dataset.url.split('/').map(str => str === '0' ? data.id : str).join('/')
        } else {
            const response = await getJSON(`/api/v1/todos/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ content: e.target.innerHTML, done: checkbox.checked })
            })
        }
    }

    async function handleDeleteToDo(e) {
        const id = parseInt(e.target.closest('.todos__todo').dataset.id)
        const target = document.querySelector(`li.todos_todo[data-id="${id}"]`)

        const response = await getJSON(`/api/v1/todos/${id}`, {
            method: 'DELETE'
        })
        const data = await response
        e.target.closest('.todos__todo').remove()
    }
})()
