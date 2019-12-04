'use strict';

$(function() {
  $('#js-shopping-list-form').submit(e => {
    e.preventDefault();
    let $inputValue = $('#shopping-list-entry').val();
    let $newListItem = `
       <li>
          <span class="shopping-item">${$inputValue}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>
      `;

    $('ul.shopping-list').append($newListItem);
    $('#js-shopping-list-form').trigger('reset');
  });

  $('button.shopping-item-toggle').on('click', function(e) {
    e.preventDefault();
    let $listSpan = $(this)
      .parent()
      .siblings('span');
    console.log($listSpan);

    if ($listSpan.hasClass('shopping-item__checked')) {
      $listSpan.removeClass('shopping-item__checked');
    } else {
      $listSpan.addClass('shopping-item__checked');
    }
  });

  $('button.shopping-item-delete').on('click', function(e) {
    e.preventDefault();
    $(this)
      .parent()
      .parent()
      .remove();
    console.log(e);
  });
});
