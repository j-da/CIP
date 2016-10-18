// surround all tags in double-quotes.
// seperate them with a comma.

var tags = ['Maths', 'English', 'Science', 'Languages', 'Geography', 'History', 'RE', 'Art', 'Drama', 'Music', 'PE', 'ICT', 'DT'];


$('#q').typeahead({source: tags});