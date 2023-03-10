const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testiomonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Van Damn',
        position: 'Batman Catcher',
        photo: 
            'https://images.unsplash.com/photo-1677492750297-bf465600cb04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        text: 
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto ducimus dignissimos harum accusamus debitis, nesciunt aut doloremque voluptatibus reiciendis obcaecati nemo blanditiis corrupti totam nostrum voluptates eaque molestias provident, labore numquam ab. Maxime, ex!'
    },
    {
        name: 'Sarah Conor',
        position: 'Terminator Killer',
        photo: 
            'https://images.unsplash.com/photo-1677261905060-7a93f54682fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        text: 
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi animi et repellat deleniti consectetur nihil facilis expedita mollitia voluptates eaque, quidem, minima quasi voluptatibus neque doloribus eligendi! Voluptate, ratione illo.'
    },
    {
        name: 'Jessica Parker',
        position: 'Name Giver',
        photo: 
            'https://images.unsplash.com/photo-1677641616290-c253027cb76f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        text: 
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto ducimus dignissimos harum accusamus debitis, nesciunt aut doloremque voluptatibus reiciendis obcaecati nemo blanditiis corrupti totam nostrum voluptates eaque molestias provident, labore numquam ab. Maxime, ex!'
    }
]

let index = 1

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[index]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    index++

    if(index > testimonials.length - 1) {
        index = 0
    }
}

setInterval(updateTestimonial, 10000)