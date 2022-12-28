window.addEventListener('scroll', e => {
    const header = document.getElementById('header');
    header.classList.toggle('header__scroll', window.scrollY > 0);
});

const createTab = (initElement, boardSelector, color) => {
    let current = {
        element: null,
        contentBoard: null,
        toggle: function() {
            if (this.element) {
                this.element.classList.toggle(`board__nav_itemActive${color}`);
            }
            if (this.contentBoard) {
                this.contentBoard.classList.toggle('d_none');
            }
        },
        newState: function(newElement, newBoard) {
            this.toggle();
            this.element = newElement;
            this.contentBoard = newBoard;
            this.toggle();
        }
    };
    const board = document.querySelector(boardSelector);
    [...board.children].forEach(element => {
        if (element.dataset.id === initElement) {
            current.newState(element, document.getElementById(element.dataset.id));
        }
        element.addEventListener('click', e => {
            if (current.element != null && e.target.dataset.id !== current.element.dataset.id) {
                current.newState(element, document.getElementById(element.dataset.id));
            }
        });
    });
};

createTab('project_task', '#board-nav-1', 'Red');
createTab('docs', '#board-nav-2', 'Violet');