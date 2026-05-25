import Task from "../models/task.model.js";

export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ userId: req.userId });

    res.status(200).json({
      data: tasks,
    });
  } catch (error) {
    next(error);
  }
};

export const getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        statusCode: 404,
        message: "Vazifa topilmadi",
      });
    }

    if (task.userId.toString() !== req.userId) {
      return res.status(403).json({
        statusCode: 403,
        message: "Bu vazifaga ruxsatingiz yo'q",
      });
    }

    res.status(200).json({
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

export const createTask = async (req, res, next) => {
  try {
    const task = await Task.create({
      ...req.body,
      userId: req.userId,
    });

    res.status(201).json({
      data: task,
      message: "Vazifa muvaffaqiyatli yaratildi",
    });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        statusCode: 404,
        message: "Vazifa topilmadi",
      });
    }

    if (task.userId.toString() !== req.userId) {
      return res.status(403).json({
        statusCode: 403,
        message: "Bu vazifaga ruxsatingiz yo'q",
      });
    }

    Object.assign(task, req.body);

    await task.save();

    res.status(200).json({
      data: task,
      message: "Vazifa muvaffaqiyatli yangilandi",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        statusCode: 404,
        message: "Vazifa topilmadi",
      });
    }

    if (task.userId.toString() !== req.userId) {
      return res.status(403).json({
        statusCode: 403,
        message: "Bu vazifaga ruxsatingiz yo'q",
      });
    }

    await task.deleteOne();

    res.status(200).json({
      message: "Vazifa muvaffaqiyatli o'chirildi",
    });
  } catch (error) {
    next(error);
  }
};

export const updateTaskStatus = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        statusCode: 404,
        message: "Vazifa topilmadi",
      });
    }

    if (task.userId.toString() !== req.userId) {
      return res.status(403).json({
        statusCode: 403,
        message: "Bu vazifaga ruxsatingiz yo'q",
      });
    }

    task.status = req.body.status;

    await task.save();

    res.status(200).json({
      data: task,
      message: "Vazifa holati yangilandi",
    });
  } catch (error) {
    next(error);
  }
};