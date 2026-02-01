$(function () {
  const $filterInput = $('#toc_filter_input');
  const $toc = $('#toc');

  if (!$filterInput.length || !$toc.length) return;

  function expandParents($item) {
    $item.parents('ul.nav').each(function () {
      const $ul = $(this);
      const $li = $ul.closest('li');
      $ul.show();
      $li.addClass('expanded');
      $li.children('.expand-stub').addClass('expanded');
    });
  }

  function collapseAll() {
    $toc.find('ul.nav').not('.level1').hide();
    $toc.find('.expanded').removeClass('expanded');
  }

  // Start collapsed
  collapseAll();

  $filterInput.on('input', function () {
    const value = $(this).val().trim();

    if (!value) {
      collapseAll();
      return;
    }

    $toc.find('a.sidebar-item:visible').each(function () {
      expandParents($(this));
    });
  });

  $('#toc_filter_clear').on('click', function () {
    $filterInput.val('');
    collapseAll();
  });
});
