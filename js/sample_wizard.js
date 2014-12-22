$(function() {
	var sample = new SampleWizard("Transforming one or more vCard records in a file to a JSON message by using the Graphical Data Mapper");
    $('.nav-tabs a:first').tab('show');
});

function setTabActive(tab) {
		$('#'+tab).removeClass('prepare_step_waiting');
		$('#'+tab).addClass('prepare_step_active');
		$('#'+tab).find('span').removeClass('glyphicon-time');
		$('#'+tab).find('span').addClass('glyphicon-refresh');
}

function setTabDone(tab) {
		$('#'+tab).removeClass('prepare_step_active');
		$('#'+tab).addClass('prepare_step_success');
		$('#'+tab).find('span').removeClass('glyphicon-refresh');
		$('#'+tab).find('span').addClass('glyphicon-ok');
}

/**
**
** SampleWizard controller
**
**/
function SampleWizard(sampleTitle) {
	this.section_titles = {};
	this.sections = [];
	this.current_section_index = 0;
	this.prev_section_index = 0;
	
	//Set Title
	this.title = sampleTitle+" Sample";
	$('title').text(this.title);
	$('#sampleHeaderTitle').text(this.title);

	this.initialise();
}	
	
SampleWizard.prototype.nextSection = function() {
		if (this.current_section_index < this.sections.length) {
			this.current_section_index++;
			this.prev_section_index = this.current_section_index - 1;
			this.load_section();
		}
	}
	
SampleWizard.prototype.previousSection = function() {
	
		if (this.current_section_index > 0) {
			this.current_section_index--;
			this.prev_section_index = this.current_section_index + 1;
			this.load_section();
		}
	
	}
	
SampleWizard.prototype.load_section = function() {
	
		//Do we need the previous btn visible?
		if (this.current_section_index != 0) {
			$('.prev_section_btn').show();
		} else {
			$('.prev_section_btn').hide();
		}
		
		//Do we need the next btn visible?
		if (this.current_section_index == this.sections.length - 1) {
			$('.next_section_btn').hide();
		} else {
			$('.next_section_btn').show();
		}
	
		$('#'+this.sections[this.prev_section_index]).hide();
		
		var current_section = this.sections[this.current_section_index];
		$('#'+current_section).show();
		
		var next_section = this.sections[this.current_section_index + 1];
		var prev_section = this.sections[this.current_section_index - 1];
		
		//Change nav button titles
		$('.next_btn_title').text(this.section_titles[next_section]);
		$('.prev_btn_title').text(this.section_titles[prev_section]);
		//Load title
		$('#header_section_title').text(this.section_titles[current_section]);
		
		//Update Dropdown list 
		$('#section_list').val(current_section);
		
		//Update Breadcrumb
		$('#step_breadcrumb a').removeClass('btn-primary');
		
		
		$('#breadcrumb_'+current_section).addClass('btn-primary');
		
		
	}
	
SampleWizard.prototype.load_section_by_id = function(id) {
		$('#'+this.sections[this.current_section_index]).hide();
		this.current_section_index = this.sections.indexOf(id);
		this.prev_section_index = this.current_section_index - 1;
		this.load_section();
	}
	
SampleWizard.prototype.loadSections = function(trackFilter) {
	
	var self = this;
	
	$('.section').each(function(index, el) {
		var el = $(el);
		var section_id = el.attr('id');
		self.sections.push(section_id);
		self.section_titles[section_id] = el.attr('title');
	});
	
	
	//Build breadcrumb 
	$.each(this.sections, function(index, value) {
		var link = $('<a/>', { 'class' : 'btn btn-lg btn-default', 'text' : self.section_titles[value], 'id': 'breadcrumb_'+value});
		link.click(function() {
			self.load_section_by_id(value);
		});
		$('#step_breadcrumb div').append(link);
		if (index < self.sections.length - 1) {
			$('#step_breadcrumb div').append($('<span/>', { 'class' : 'glyphicon glyphicon-arrow-right' }));
		}
	});

}

SampleWizard.prototype.initialise = function() {
	
		var self = this;
		
		//Get list of available sections
		this.loadSections();

		$('#footer').show();
	
		//Load up sections list

		$.each(this.section_titles, function(sectionId, sectionName) {
				$('#section_list').append("<option value=\""+sectionId+"\">"+sectionName+"</option>");
		});
			
		$(".nodes_list li").tooltip();
		
		$('.next_section_btn').click(function() {
			self.nextSection();
		});
		
		$('.prev_section_btn').click(function() {
			self.previousSection();
		});
		
	
		//Section Dropdown List
		$('#section_list').change(function() {
			var section = $(this).val();
			self.load_section_by_id(section);
		});

		
		$('#intro_tabs a').click(function (e) {
		  e.preventDefault()
		  $(this).tab('show')
		})
		

		
		this.load_section();
		
	}
