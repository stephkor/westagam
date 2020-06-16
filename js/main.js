const postBtn= document.getElementById('comment_post_btn');
const container = document.getElementsByClassName('comment_input_container')[0];




postBtn.addEventListener('click', function(){
    const commentInput = document.getElementsByClassName('comment_input')[0];

    let newDiv = document.createElement('div');
    let newComment = document.createElement('p');
    let newUser = document.createElement('span');
    let uploadedComment = document.getElementsByClassName('comment_content')[0];

    newDiv.className = 'newComment';
    newComment.className = 'newCommentValue';
    newUser.className = 'newUserId';

    newComment.innerHTML = commentInput.value;
    newUser.innerHTML = "wecoder";
    
    uploadedComment.appendChild(newDiv);
    newDiv.appendChild(newUser);
    newDiv.appendChild(newComment);
    


}) ;



