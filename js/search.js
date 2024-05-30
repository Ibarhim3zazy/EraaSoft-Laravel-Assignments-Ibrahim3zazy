function search_1() {
    let i = 1;
    const searchSubjects = ['what is composer in PHP', 'search for magic constants'];
    for (const element of searchSubjects) {
        document.getElementById("demo").innerHTML += '\
        <tr>\
            <th scope="row">'+ i++ + '</th>\
            <td>\
                <a class="icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" href="searches/' + element + '.pptx">' + element + '\
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg>\
                </a>\
            </td>\
        </tr>';
    }
}
