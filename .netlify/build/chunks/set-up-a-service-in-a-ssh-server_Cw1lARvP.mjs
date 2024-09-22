const id = "set-up-a-service-in-a-ssh-server.mdx";
						const collection = "writing";
						const slug = "set-up-a-service-in-a-ssh-server";
						const body = "\r\nYou get a connection with ssh, and then you run your project or a command. You are innocent and just close the terminal assuming that your command will run forever in the SSH Server. If this was your case (Or you're just curios) let me help you to do a real Service in Linux for your SSH Server.\r\n\r\nFirst of all we need to go to `/etc` in your SSH Server. So, if you are already logged in just put in the terminal:\r\n\r\n```bash\r\ncd /etc\r\n```\r\n\r\n`/etc` is where we have our system configuration files, it's like our nerve center of our system, so be careful of what you are touching here please. Also, that is why we are putting a service file right here. Let's dive into:\r\n\r\n```bash\r\ncd system/system\r\n```\r\n\r\nAnd here is where we create a new file called: `[name of your service].service`, in my case will be named `deploy-frontend.service`. So, in the terminal you will need to add:\r\n\r\n```bash\r\nvim deploy-frontend.service\r\n```\r\n\r\nAnd now we have a new file service! That is great but not all. Let me explain to you the syntax of the new file.\r\n\r\n```bash\r\n[Unit]\r\n# Here we describe our service\r\nDescription=Serve run for frontend\r\n\r\n[Service]\r\n# Here we are going to detail the actions of our service\r\nExecStart={path_of_the_command} -s /home/dev/app/dist -l 5000\r\nRestart=always\r\nUser={your_username}\r\n\r\n[Install]\r\n# And here we define what users had this service\r\n```\r\n\r\nAnd in my case my service looks like this:\r\n\r\n```bash\r\n[Unit]\r\nDescription=Serve run for frontend\r\n\r\n[Service]\r\nExecStart=/usr/bin/serve -s /home/dev/app/dist -l 5000\r\nRestart=always\r\nUser=dev\r\n\r\n[Install]\r\nWantedBy=multi-user.target\r\n```\r\n";
						const data = {title:"How to setup a service in a SSH Server",description:"",pubDate:new Date(1729062000000)};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/Omar/Documents/sazarsource/src/content/writing/set-up-a-service-in-a-ssh-server.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
