function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];

}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
	if (!this.marks) {
		return;
	}
	marksToAdd.forEach((mark) => this.marks.push(mark));
}

Student.prototype.getAverage = function() {
	if (!this.marks || !this.marks.length) {
		return 0;
	}
	const sum = this.marks.reduce((acc, mark) => acc + mark);
	return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}