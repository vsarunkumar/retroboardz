##Steps to install
1. download code to local
2. open command prompt and navigate to folder containing code
3. type npm install

4. open another cmd window and start mongodb by typing "C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe"
5. open another cmd window and start mongodb by typing "C:\Program Files\MongoDB\Server\3.6\bin\mongo.exe"
	(Here we are creating database and tables)
	*create database
		use retroboard
	*create collection
		db.createCollection("templates")
		db.createCollection("retroboardzs")
		db.createCollection("retrosections")
	*create documents
		db. templates.insert({TemplateName: 'Retroboardz', SectionName: 'What went well', SectionSeq: 1})
		db. templates.insert({TemplateName: 'Retroboardz', SectionName: 'What can be improved', SectionSeq: 2})
		db. templates.insert({TemplateName: 'Retroboardz', SectionName: 'Action Item', SectionSeq: 3})

		

6. type npm start in cmd window (same one in step 2)
7. open another cmd and type npm run build. app will be ready in http://localhost:3000/

