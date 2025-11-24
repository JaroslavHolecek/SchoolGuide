function resizeIframe(iframe) {
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}

function createTaskNodeFromTemplate(template, {id, heading, descriptionHtml, topicHintHtml, iframeSrc, help}) {
    const node = template.content.cloneNode(true);
    const taskDiv = node.querySelector('.task');
    if (id) taskDiv.id = id;
    if (heading) node.querySelector('.task-heading').textContent = heading;
    if (descriptionHtml) node.querySelector('.task-description').innerHTML = descriptionHtml;
    if (iframeSrc) {node.querySelector('iframe').src += iframeSrc;}else{node.querySelector('.task-result-view').remove();}
    if (topicHintHtml) node.querySelector('.task-topic-hint').innerHTML = topicHintHtml;
    if (help && Array.isArray(help)) {
        const helpContainer = node.querySelector('.task-help');
        helpContainer.innerHTML = '';
        help.forEach(linkObj => {
            if (linkObj && linkObj.text && linkObj.url) {
                const a = document.createElement('a');
                a.textContent = linkObj.text.replace(/ /g, '\u00A0');
                a.href = linkObj.url;
                a.target = '_blank';
                helpContainer.appendChild(a);
                helpContainer.appendChild(document.createTextNode(' '));
                //helpContainer.appendChild(document.createElement('br'));
            }
        });
    }
    return node;
}

function createTasksGroupNodeFromTemplate(id, {group_template, task_template}, {groupHeading, tasks}) {
    const node = group_template.content.cloneNode(true);
    node.querySelector('.tasks-group').id = id;
    node.querySelector('.tasks-group-heading').textContent = groupHeading;
    const tasksContainer = node.querySelector('.tasks-group-tasks');
    tasks.forEach(task => {
        tasksContainer.appendChild(createTaskNodeFromTemplate(task_template, task));
    });
    return node;
}

function addTaskGroupToPage(id, templates, groupData) {
    const groupNode = createTasksGroupNodeFromTemplate(id, templates, groupData);
    document.getElementById('tasks-container').appendChild(groupNode);

    const navLinks = document.querySelector('nav');
        const navLink = document.createElement('a');
        navLink.href = `#${id}`;
        navLink.textContent = groupData.groupHeading;

        if (navLinks.children.length > 0) {
            navLinks.appendChild(document.createTextNode(' | '));
        }

        navLinks.appendChild(navLink);
        
}