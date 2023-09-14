document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.gameBoard').addEventListener('click',  markField);
    let current = 0,
        players = [ 'x', 'o'];

    function markField (e) {
        let field = e.target;
        field.setAttribute('aria-label', players[current]);
        field.setAttribute('disabled','disabled');
        current = 1 - current;
        document.querySelector('.gameStatus').innerText = `Player ${players[current]} turn`;
    }
    }
    );
