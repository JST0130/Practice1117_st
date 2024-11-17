document.getElementById('add-todo').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const todoText = input.value;

    if (todoText) {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = todoText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '삭제';
        deleteBtn.className = 'btn btn-danger btn-sm';
        deleteBtn.addEventListener('click', function() {
            Swal.fire({
                title: '삭제 확인',
                text: '이 할 일을 정말 삭제하시겠습니까?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: '삭제',
                cancelButtonText: '취소'
            }).then((result) => {
                if (result.isConfirmed) {
                    li.remove(); // 리스트 항목 삭제
                    Swal.fire(
                        '삭제됨!',
                        '할 일이 삭제되었습니다.',
                        'success'
                    );
                }
            });
        });

        li.appendChild(deleteBtn); // 삭제 버튼을 리스트 항목에 추가
        document.getElementById('todo-list').appendChild(li);
        input.value = ''; // 입력 필드 초기화

        Swal.fire({
            title: '추가됨!',
            text: '할 일이 추가되었습니다.',
            icon: 'success',
            confirmButtonText: '확인'
        });
    }
});
