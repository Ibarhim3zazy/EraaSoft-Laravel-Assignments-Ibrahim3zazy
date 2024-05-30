function tasks() {
    let i = 1;
    const tasks = [
        {
            img:"task_1.0.0.png",
            desc:"here you can see the result of using bootstrap and how you can call a bootstrap css and js to build your website and create a navbar to your website and building a full page such as a products page or category page", 
            searchLink:"search_1",
            taskLink:"https://github.com/Ibarhim3zazy/furni_1.0.0.git",
            date: '2 march 2024'
        }
    ];
    for (const element of tasks) {
        document.getElementById("demo").innerHTML += 
        '<div class="col">\
            <div class="card shadow-sm">\
                <img src="images/'+ element.img +'" class="bd-placeholder-img card-img-top" width="100%" height="225" alt="">\
                    <div class="card-body">\
                        <p class="card-text">'+ element.desc +'</p>\
                        <div class="d-flex justify-content-between align-items-center">\
                            <div class="btn-group">\
                                <a href="'+ element.taskLink +'" class="btn btn-sm btn-outline-secondary" target="_blank">Task Link</a>\
                                <a href="'+ element.searchLink +'.html" class="btn btn-sm btn-outline-secondary"">Search Link</a>\
                            </div>\
                            <small class="text-muted">'+ element.date +'</small>\
                        </div>\
                    </div>\
                </div>\
        </div >';
    }
}

