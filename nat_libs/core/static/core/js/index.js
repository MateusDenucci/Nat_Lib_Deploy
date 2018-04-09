$('#btn_meanings').click(function(){
  word = $('#vocabulary_word').val()
  $.ajax({
    url: '/lessons/get_meanings/',
    data: {
      'vocabulary_word': word
    },
    dataType: 'html',
    success: function (data) {
      $('#meanings_list').html(data)
      $('#meanings_list').dialog();
      $("#student_word").text(word)
    }

  });
});

$('#btn_audio').click(function(){
  word = $('#pronunciation_word').val()
  $.ajax({
    url: '/lessons/get_audio/',
    data: {
      'pronunciation_word': word
    },
    dataType: 'json',
    success: function (data) {
      $("#player_audio").attr("src", data.src);
      audio_loop(0);
      $('#pronunciation_audio').show()
      $("#student_word").text(word)
    }

  });
});

$('#btn_vocabulary').click(go_to_vocabulary);
Mousetrap.bind('v',go_to_vocabulary);
function go_to_vocabulary() {
  $('#vocabulary_box').show();
  $('#professor_box_options').hide();
  //$('#vocabulary_word').focus();
}

$('#btn_pronunciation').click(go_to_pronunciation);
Mousetrap.bind('p',go_to_pronunciation);
function go_to_pronunciation() {
  $('#professor_box_options').hide();
  $('#pronunciation_box').show();
  //$('#pronunciation_word').focus();
}

$('#btn_grammar').click(go_to_grammar);
Mousetrap.bind('g',go_to_grammar);
function go_to_grammar() {
  $('#professor_box_options').hide();
  $('#grammar_box').show();
}

$('#btn_other_notes').click(go_to_other_notes);
Mousetrap.bind('o',go_to_other_notes);
function go_to_other_notes() {
  $('#professor_box_options').hide();
  $('#other_notes_box').show();
}

$('.btn_return').click(return_professor_box);
Mousetrap.bind('r',return_professor_box);
function return_professor_box(){
  $('.option_box').hide();
  $('#professor_box_options').show();
}
$(".btn-minimize").click(minimize_professor_box);
Mousetrap.bind('n',minimize_professor_box);
function minimize_professor_box(){
  if($('.btn-minimize').hasClass('btn-danger')){
    $('.btn-minimize').removeClass('btn-danger').addClass('btn-success');
  }else{
    $('.btn-minimize').removeClass('btn-success').addClass('btn-danger');
  }
  $("#professor_box").slideToggle();
}

$("#btn_add_vocabulary").click(function(){
  word = $('#vocabulary_word').val();
  meaning = ($('input[name=meaning]:checked').val());
  $.ajax({
    url: '/lessons/add_vocabulary/',
    data: {
      'vocabulary_word': word,
      'meaning': meaning
    },
    dataType: 'html',
    success: function (data) {
      alert(data);
      $('#vocabulary_word').val("");
      $('#meanings_list').empty();
      $('#meanings_list').dialog('close');
      return_professor_box();
    }

  });
});

$("#btn_add_other_notes").click(function(){
  other_notes = $('#other_notes').val();
  $.ajax({
    url: '/lessons/add_other_notes/',
    data: {
      'other_notes': other_notes
    },
    dataType: 'html',
    success: function (data) {
      alert(data)
      $('#other_notes').val("")
      return_professor_box()
    }

  });
});
$("#start_class").click(function(){
  word = 'hey';
  $.ajax({
    url: '/lessons/start_class/',
    data: {
      'pronunciation_word': word
    },
    dataType: 'html',
    success: function (data) {
      alert(data)
    }

  });
});

// funcao chamada quando o #btn_audio é pressionado para tocar o audio tres vezes
var audio = document.getElementById("player_audio");
function audio_loop(repetitions) {          
  setTimeout(function () {
    audio.play();
    repetitions++;           
    if (repetitions < 3) {        
    audio_loop(repetitions);             
    }                        
  }, 3000)
}


